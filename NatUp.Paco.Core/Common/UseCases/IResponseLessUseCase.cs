namespace NatUp.Paco.Core.Common.UseCases
{
    public interface IResponseLessUseCase<TRequest>
    {
        void Execute(TRequest request);
    }
}
