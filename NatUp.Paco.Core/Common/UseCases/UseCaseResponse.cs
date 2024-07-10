namespace NatUp.Paco.Core.Common.UseCases
{
    public class UseCaseResponse
    {
        public bool IsSucceded { get; set; }
        public List<Errors>? ErrorMessages { get; set; }

        public UseCaseResponse(bool isSucceded)
        {
            IsSucceded = isSucceded;
        }

        public UseCaseResponse(bool isSucceded, List<Errors> errors)
        {
            IsSucceded = isSucceded;
            ErrorMessages = errors;
        }
    }

    public class Errors
    {
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public string PropertyName { get; set; }

        public Errors(string errorCode, string errorMessage, string propertyName)
        {
            ErrorCode = errorCode;
            ErrorMessage = errorMessage;
            PropertyName = propertyName;
        }

    }
}
