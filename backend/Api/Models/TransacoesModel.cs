using System.ComponentModel.DataAnnotations;

namespace ControleGastos.Api.Models;

public enum TipoTransacao //Tipos de transacoes recebe apena dois valores padrao.
{
    Receita,
    Despesa
}

public class TransacoesModel
{
    [Key]
    public int TransacaoId { get; set; }

    // Descrição da transação
    public string Descricao { get; set; } = string.Empty;

    // Valor da receita ou despesa
    [Required]
    public decimal Valor { get; set; }

    // Utilizei o enum para colocar valores fixos na coluna TipoTransacao
    [Required]
    public TipoTransacao Tipo { get; set; }

    // Chave estrangeira da pessoa
    public int PessoaId { get; set; }

    // Relaciona PessoasModel com as Transacoes.
    public PessoasModel Pessoa { get; set; } = null!;
}