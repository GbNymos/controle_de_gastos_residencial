using ControleGastos.Api.Data;
using ControleGastos.Api.DTO;
using ControleGastos.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Services;

/// <summary>
/// Serviço responsável pelas regras de negócio relacionadas às pessoas.
/// </summary>
public class PessoaService
{
    private readonly AppDbContext _context;

    public PessoaService(AppDbContext context)
    {
        _context = context;
    }

//Metodo para criar uma nova pessoa no banco de dados
    public async Task<PessoaResponseDto> CadastraPessoaAsync(PessoaRequestDto pessoaRequest)
{
    var pessoa = new PessoaModel
    {
        Nome = pessoaRequest.Nome,
        Idade = pessoaRequest.Idade
    };

    _context.Pessoas.Add(pessoa);

    await _context.SaveChangesAsync();

    return new PessoaResponseDto
    {
        PessoaId = pessoa.PessoaId,
        Nome = pessoa.Nome,
        Idade = pessoa.Idade
    };
}

//Metodo para listar todas as pessoas no banco de dados
public async Task<List<PessoaResponseDto>> ListarPessoasAsync()
{
    var pessoas = await _context.Pessoas.ToListAsync();

    var resposta = pessoas.Select(p => new PessoaResponseDto
    {
        PessoaId = p.PessoaId,
        Nome = p.Nome,
        Idade = p.Idade
    }).ToList();

    return resposta;
}

//Metodo para excluir uma pessoa do banco de dados 
//e o banco excluir automaticamente todas as transações associadas a essa pessoa.
public async Task<bool> ExcluirPessoaAsync(int id)
{
    var pessoa = await _context.Pessoas.FindAsync(id);

    if (pessoa == null)
    {
        return false;
    }

    _context.Pessoas.Remove(pessoa);

    await _context.SaveChangesAsync();

    return true;
}

}