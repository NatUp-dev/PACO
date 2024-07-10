using Microsoft.EntityFrameworkCore;

namespace NatUp.Paco.Infrastructure.Common.Repositories
{
    public abstract class EntityRepository<TEntity, TId> where TEntity : Core.Common.Entities.Entity<TId>
    {
        protected readonly ApplicationContext _ctx;

        public EntityRepository(ApplicationContext ctx)
        {
            _ctx = ctx;
        }

        public void Add(params TEntity[] entities)
        {
            _ctx.Set<TEntity>().AddRange(entities);
        }

        public void Delete(params TEntity[] entities)
        {
            _ctx.Set<TEntity>().RemoveRange(entities);
        }

        protected virtual IQueryable<TEntity> Entries() => _ctx.Set<TEntity>();

        public virtual IQueryable<TEntity> GetAll() => Entries();

        public virtual TEntity GetById(TId id) => Entries().FirstOrDefault(o => o.Id!.Equals(id))!;

        public IQueryable<TEntity> GetAllUntracked() => Entries().AsNoTracking();
    }
}
