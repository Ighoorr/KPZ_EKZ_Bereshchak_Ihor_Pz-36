using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace App.Models
{
    public partial class DbFirstContext : DbContext
    {
        public DbFirstContext()
        {
        }
       

        public DbFirstContext(DbContextOptions<DbFirstContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Film> Films { get; set; }
        public virtual DbSet<Recommendation> Recommendations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.;Database=DbFirst;Trusted_connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Ukrainian_CI_AS");

            modelBuilder.Entity<Film>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Genre)
                    .HasMaxLength(20)
                    .HasColumnName("genre")
                    ;

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .HasColumnName("name")
                   ;

                entity.Property(e => e.Path)
                    .HasMaxLength(70)
                    .HasColumnName("path")
                    ;
            });
           
            modelBuilder.Entity<Recommendation>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(80)
                    .HasColumnName("description")
                    ;

                entity.Property(e => e.IdFilm).HasColumnName("idFilm");

                /*entity.HasOne(d => d.IdFilmNavigation)
                    .WithMany(p => p.Recommendations)
                    .HasForeignKey(d => d.IdFilm)
                    .HasConstraintName("FK_Recommendations_Films");*/
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
