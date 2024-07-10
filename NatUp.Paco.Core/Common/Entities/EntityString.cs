namespace NatUp.Paco.Core.Common.Entities
{
    public abstract class EntityString : Entity<string>
    {
        public EntityString() : base() { }
        protected override string GenerateId() => string.Empty;
    }
}
