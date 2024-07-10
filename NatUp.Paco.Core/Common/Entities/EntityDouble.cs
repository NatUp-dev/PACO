namespace NatUp.Paco.Core.Common.Entities
{
    public abstract class EntityDouble : Entity<double>
    {
        public EntityDouble() : base() { }
        protected override double GenerateId() => 0;
    }
}
