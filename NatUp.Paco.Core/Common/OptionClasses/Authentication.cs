namespace NatUp.Paco.Core.Common.OptionClasses
{
    public class Authentication
    {
        public string JWTValidIssuer { get; set; } = string.Empty;
        public string JWTValidAudience { get; set; } = string.Empty;
        public string JWTIssuerSigningKey { get; set; } = string.Empty;
    }
}
