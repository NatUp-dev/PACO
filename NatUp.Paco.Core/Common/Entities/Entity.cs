namespace NatUp.Paco.Core.Common.Entities
{
    public abstract class Entity<T>
    {
        public T Id { get; protected set; }
        protected abstract T GenerateId();
        public Entity()
        {
            Id = GenerateId();
        }
    }
}
