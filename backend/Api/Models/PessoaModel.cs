using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ControleGastos.Api.Models;

    public class PessoaModel
    {
        [Key]
        public int PessoaId { get; set; }

        [Required]
        public string Nome { get; set; } = string.Empty;

        [Required]
        public int Idade { get; set; }

        [NotMapped]
        public bool MenorDeIdade => Idade < 18;

        // Lista de transações pertencentes a essa pessoa
        public ICollection<TransacaoModel> Transacoes { get; set; } = new List<TransacaoModel>();

    }
