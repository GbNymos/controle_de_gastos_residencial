/// <summary>
/// Exceção personalizada para violações de regras de negócio da aplicação.
///
/// Diferente de erros inesperados (falha de banco, infraestrutura), essa
/// exceção indica que a operação foi rejeitada porque violou uma regra
/// definida pelo domínio.
///
/// Exemplos:
/// - Menores de idade não podem cadastrar receitas.
/// - Não é possível cadastrar transação para pessoa inexistente.
///
/// É capturada no Controller para retornar 400 Bad Request ao cliente,
/// em vez de aparecer como erro 500 (erro interno do servidor).
/// </summary>

namespace ControleGastos.Api.Exceptions;

public class RegraNegocioException : Exception
{
    public RegraNegocioException(string mensagem)
        : base(mensagem)
    {
    }
}