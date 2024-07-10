namespace NatUp.Paco.Core.Common.Entities
{
    public abstract class LogicalDeletableEntityGuid : EntityGuid
    {
        public bool IsActive { get; private set; }
        public LogicalDeletableEntityGuid() : base() { IsActive = true; }

        public void Delete() { IsActive = false; }
        public void Restore() { IsActive = true; }
    }
}
