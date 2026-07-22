using ControleGastos.Api.DTO;
using ControleGastos.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace ControleGastos.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly PessoaService _pessoaService;

    public PessoaController(PessoaService pessoaService)
    {
        _pessoaService = pessoaService;
    }

        [HttpPost]
    public async Task<ActionResult<PessoaResponseDto>> CriarPessoa(PessoaRequestDto request)
    {
        var pessoa = await _pessoaService.CadastraPessoaAsync(request);

        return Ok(pessoa);
    }

    [HttpGet]
    public async Task<ActionResult<List<PessoaResponseDto>>> ListarPessoas()
{
        var pessoas = await _pessoaService.ListarPessoasAsync();

        return Ok(pessoas);

        
}
    [HttpDelete("{PessoaId}")]
    public async Task<IActionResult> ExcluirPessoa(int PessoaId)
    {
        var excluiu = await _pessoaService.ExcluirPessoaAsync(PessoaId);

        if (!excluiu)
        {   
            return NotFound();
        }

        return NoContent();
}



}