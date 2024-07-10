namespace NatUp.Paco.Core.Common.UseCases
{
    public interface IUseCase<TRequest, TResponse>
    {
        TResponse Execute(TRequest request);
    }
}
