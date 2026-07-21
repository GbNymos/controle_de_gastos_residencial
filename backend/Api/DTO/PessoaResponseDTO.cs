namespace ControleGastos.Api.DTO;

/// <summary>
/// Dados retornados pela API após operações relacionadas às pessoas.
/// Representa as informações que serão enviadas ao cliente.
/// </summary>
public class PessoaResponseDto
{
    public int PessoaId { get; set; }

    public string Nome { get; set; } = string.Empty;

      public int Idade { get; set; }
}