using Microsoft.EntityFrameworkCore;
using ControleGastos.Api.Models;
using Microsoft.Data.Sqlite;

namespace ControleGastos.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
        Database.ExecuteSqlRaw("PRAGMA foreign_keys=ON;");
    }

    public DbSet<PessoaModel> Pessoas { get; set; } = null!;

    public DbSet<TransacaoModel> Transacoes { get; set; } = null!;

// Configura o relacionamento entre PessoaModel e TransacaoModel para exclusao em cascata. 
// Quando uma pessoa for excluída, todas as suas transações associadas também serão excluídas automaticamente.
    protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<TransacaoModel>()
        .HasOne(t => t.Pessoa)
        .WithMany(p => p.Transacoes)
        .HasForeignKey(t => t.PessoaId)
        .OnDelete(DeleteBehavior.Cascade);
}
}