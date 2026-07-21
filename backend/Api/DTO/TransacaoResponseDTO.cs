namespace ControleGastos.Api.DTO;

/// <summary>
/// Dados retornados pela API após operações relacionadas às transações.
/// Representa as informações que serão enviadas ao cliente.
/// </summary>
public class TransacaoResponseDto
{
    public int TransacaoId { get; set; }

    public string Descricao { get; set; } = string.Empty;

    public decimal Valor { get; set; }

    public string Tipo { get; set; } = string.Empty;

    public int PessoaId { get; set; }
}