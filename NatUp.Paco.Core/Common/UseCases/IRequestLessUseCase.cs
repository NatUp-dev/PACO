namespace NatUp.Paco.Core.Common.UseCases
{
    public interface IRequestLessUseCase<TResponse>
    {
        TResponse Execute();
    }
}
