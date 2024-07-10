namespace NatUp.Paco.Core.Common.Entities
{
    public abstract class EntityGuid : Entity<Guid>
    {
        public EntityGuid() : base() { }
        protected override Guid GenerateId() => Guid.NewGuid();
    }
}
