using System.ComponentModel.DataAnnotations;

namespace ControleGastos.Api.DTO;
/// <summary>
/// Dados recebidos do front-end para cadastrar uma nova pessoa.
/// validações basicas -> (DataAnnotations) são verificadas automaticamente pelo
/// ASP.NET Core antes da execução do Controller, retornando 400 Bad Request
/// caso alguma regra não seja atendida.
/// </summary>

public class PessoaRequestDto
{
    [Required(ErrorMessage = "O nome é obrigatório.")]
    [StringLength(150, MinimumLength = 3,
        ErrorMessage = "O nome deve ter entre 3 e 150 caracteres.")]
    public string Nome { get; set; } = string.Empty;

    [Range(1, 120,
        ErrorMessage = "A idade deve ser maior que zero e menorque 120.")]
    public int Idade { get; set; }
}