using ControleGastos.Api.DTO;
using ControleGastos.Api.Services;
using Microsoft.AspNetCore.Mvc;
using ControleGastos.Api.Exceptions;

namespace ControleGastos.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly TransacaoService _transacaoService;

    public TransacaoController(TransacaoService transacaoService)
    {
        _transacaoService = transacaoService;
    }

    [HttpPost]
    public async Task<ActionResult<TransacaoResponseDto>> CriarTransacao(TransacaoRequestDto request)
    {
        try
        {
            var transacao = await _transacaoService.CadastrarTransacaoAsync(request);

            return Ok(transacao);
        }
        catch (RegraNegocioException ex)
        {
            return BadRequest(new
        {
            mensagem = ex.Message
        });
    }
    }
    //Pegar todas as transações
    [HttpGet]
    public async Task<ActionResult<List<TransacaoResponseDto>>> ListarTransacoes()
    {
        var transacoes = await _transacaoService.ListarTransacoesAsync();

        return Ok(transacoes);
}
}