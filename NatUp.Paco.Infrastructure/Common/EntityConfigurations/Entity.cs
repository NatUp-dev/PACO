using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace NatUp.Paco.Infrastructure.Common.EntityConfigurations
{
    public abstract class Entity<T, Tid> : IEntityTypeConfiguration<T> where T : Core.Common.Entities.Entity<Tid>
    {
        public virtual void Configure(EntityTypeBuilder<T> builder)
        {
            builder.HasKey(o => o.Id);
        }
    }
}
