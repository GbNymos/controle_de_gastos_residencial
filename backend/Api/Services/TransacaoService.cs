using ControleGastos.Api.Data;
using ControleGastos.Api.DTO;
using ControleGastos.Api.Models;
using Microsoft.EntityFrameworkCore;
using ControleGastos.Api.Exceptions;

namespace ControleGastos.Api.Services;

/// <summary>
/// Serviço responsável pelas regras de negócio relacionadas às transações.
/// </summary>
public class TransacaoService
{
    private readonly AppDbContext _context;

    public TransacaoService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<TransacaoResponseDto> CadastrarTransacaoAsync(TransacaoRequestDto request)
{
    // Busca a pessoa responsável pela transação
    var pessoa = await _context.Pessoas.FindAsync(request.PessoaId);


    if (pessoa == null)
    {
        throw new RegraNegocioException("Pessoa não encontrada.");
    }

    // Regra de negócio:
    // Criei uma propriedade chamada "MenorDeIdade" na classe PessoaModel que retorna true se a idade for menor que 18.
    if (pessoa.MenorDeIdade && request.Tipo == TipoTransacao.Receita)
{
    throw new RegraNegocioException("Menores de idade não podem cadastrar receitas.");
}

    // Criando a transação
    var transacao = new TransacaoModel
    {
        Descricao = request.Descricao,
        Valor = request.Valor,
        Tipo = request.Tipo,
        PessoaId = request.PessoaId
    };

    _context.Transacoes.Add(transacao);

    await _context.SaveChangesAsync();


    return new TransacaoResponseDto
    {
        TransacaoId = transacao.TransacaoId,
        Descricao = transacao.Descricao,
        Valor = transacao.Valor,
        Tipo = transacao.Tipo.ToString(),
        PessoaId = transacao.PessoaId
    };

    
}
    public async Task<List<TransacaoResponseDto>> ListarTransacoesAsync()
{
        var transacoes = await _context.Transacoes.ToListAsync();

        return transacoes.Select(t => new TransacaoResponseDto
    {
        TransacaoId = t.TransacaoId,
        Descricao = t.Descricao,
        Valor = t.Valor,
        Tipo = t.Tipo.ToString(),
        PessoaId = t.PessoaId
    }).ToList();
}

}