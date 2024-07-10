namespace NatUp.Paco.Core.Common.Repositories
{
    public interface IEntityRepository<T, Tid>
    {
        void Add(params T[] entities);

        void Delete(params T[] entities);

        T GetById(Tid id);

        IQueryable<T> GetAllUntracked();

        IQueryable<T> GetAll();
    }
}
