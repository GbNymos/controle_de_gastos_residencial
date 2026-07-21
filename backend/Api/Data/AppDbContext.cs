using Microsoft.EntityFrameworkCore;
using ControleGastos.Api.Models;

namespace ControleGastos.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<PessoasModel> Pessoas { get; set; } = null!;

    public DbSet<TransacoesModel> Transacoes { get; set; } = null!;
}