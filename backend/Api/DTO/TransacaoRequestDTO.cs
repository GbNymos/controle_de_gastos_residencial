using System.ComponentModel.DataAnnotations;
using ControleGastos.Api.Models;

namespace ControleGastos.Api.DTO;

/// <summary>
/// Dados recebidos do front-end para cadastrar uma nova transação.
/// validações basicas (DataAnnotations) são verificadas automaticamente pelo
/// ASP.NET Core antes da execução do Controller, retornando 400 Bad Request
/// caso alguma regra não seja atendida.
/// </summary>
public class TransacaoRequestDto
{
    [Required(ErrorMessage = "A descrição é obrigatória.")]
    [StringLength(150, ErrorMessage = "A descrição deve ter no máximo 150 caracteres.")]
    public string Descricao { get; set; } = string.Empty;

    [Range(0.01, double.MaxValue, ErrorMessage = "O valor deve ser maior que zero.")]
    public decimal Valor { get; set; }

    public TipoTransacao Tipo { get; set; }

    [Required(ErrorMessage = "Informe a pessoa responsável pela transação.")]
    public int PessoaId { get; set; }   
}