using ElmahCore.Mvc;
using ElmahCore.Sql;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NatUp.Paco.Core.Common.OptionClasses;
using NatUp.Paco.Core.Providers;
using NatUp.Paco.Infrastructure;
using NatUp.Paco.Infrastructure.Providers;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddHttpClient();

#region Configuration
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appSettings.json", optional: false, reloadOnChange: true)
    .AddEnvironmentVariables()
    .Build();

builder.Services.Configure<Authentication>(configuration.GetSection("Authentication"));
#endregion

#region Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config =>
{
    config.SwaggerDoc("v1", new OpenApiInfo { Title = "NatUp.Paco.API", Description = "Swagger interface for NatUp.Paco API" });
    config.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Jeton d'authentification avec le préfixe Bearer.\r\n\r\nExemple: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\"",
    });
    config.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] {}
                    }
                });
});
#endregion


#region JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var settings = configuration.GetSection("Authentication").Get<Authentication>()!;
        byte[] signingKeyBytes = Encoding.UTF8.GetBytes(settings.JWTIssuerSigningKey);
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = settings.JWTValidIssuer,
            ValidateAudience = true,
            ValidAudience = settings.JWTValidAudience,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(signingKeyBytes)
        };
    });

builder.Services.AddAuthorization();
#endregion

#region FluentValidation
#endregion

#region Misc
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(configuration["ConnectionStrings:ApplicationDatabase"]));
#endregion

#region Elmah
builder.Services.AddElmah<SqlErrorLog>(options =>
{
    options.ConnectionString = configuration["ConnectionStrings:ElmahDatabase"];
    options.ApplicationName = "NatUp.Paco";//,
    //options.PermissionCheck = context => context.User.IsInRole(configuration[""])
});
#endregion

#region Repositories and Providers
builder.Services.AddScoped(typeof(IAppSettingsProvider<>), typeof(AppSettingsProvider<>));
#endregion

#region UseCases
#endregion

var app = builder.Build();

if (!app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseElmahExceptionPage();
}
else
{
    app.UseHsts();
}

app.UseCors(builder => builder
.AllowAnyHeader()
.AllowAnyMethod()
.AllowCredentials()
.WithOrigins([.. configuration.GetSection("CORS:AllowOrigin").Get<List<string>>()!])
);

app.UseAuthorization();
app.UseElmah();


app.MapControllers();

app.Run();