namespace NatUp.Paco.Core.Common.UseCases
{
    public interface ICoreValidator<T>
    {
        ValidationResult Validate(T value);
    }

    public class ValidationResult
    {
        public bool IsValid { get; set; }
        public List<Errors>? Errors { get; set; }

        public ValidationResult(bool isValid)
        {
            IsValid = isValid;
        }

        public ValidationResult(bool isValid, List<Errors> errors)
        {
            IsValid = isValid;
            Errors = errors;
        }
    }
}
