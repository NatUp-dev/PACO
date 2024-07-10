using Microsoft.EntityFrameworkCore;

namespace NatUp.Paco.Infrastructure
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        // Constructeur par défaut
        public ApplicationContext() { }

        // Représentation des tables

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(LocalDB)\\MSSQLLocalDB;Database=NatUp.Paco;persist security info=True;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Déclaration des entités pour le Code First
        }
    }
}
