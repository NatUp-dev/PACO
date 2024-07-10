using Microsoft.Extensions.Options;
using NatUp.Paco.Core.Providers;

namespace NatUp.Paco.Infrastructure.Providers
{
    public class AppSettingsProvider<T> : IAppSettingsProvider<T> where T : class
    {
        private readonly IOptions<T> _options;
        public AppSettingsProvider(IOptions<T> options)
        {
            _options = options;
        }

        public T GetSettings()
        {
            return _options.Value;
        }
    }
}
