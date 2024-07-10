using Microsoft.AspNetCore.Http;
using NatUp.Paco.Core.Providers;

namespace NatUp.Paco.Infrastructure.Providers
{
    public class GetCurrentUserProvider : IGetCurrentUserProvider
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public GetCurrentUserProvider(IHttpContextAccessor httpContextAccessor) { _httpContextAccessor = httpContextAccessor; }
        public string GetCurrentUser()
        {
            return _httpContextAccessor.HttpContext!.User.Claims.Where(c => c.Type == "name").Select(c => c.Value).FirstOrDefault()!;
        }
    }

}
