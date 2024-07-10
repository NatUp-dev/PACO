namespace NatUp.Paco.Core.Providers
{
    public interface IAppSettingsProvider<T>
    {
        T GetSettings();
    }
}
