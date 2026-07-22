import type { PessoaResponse } from "../models/Pessoa";
import type { TransacaoResponse } from "../models/Transacao";

interface Props {
  transacoes: TransacaoResponse[];
  pessoas: PessoaResponse[];
}

export default function TransacaoList({
  transacoes,
  pessoas,
}: Props) {
  function nomePessoa(id: number) {
    return pessoas.find((p) => p.pessoaId === id)?.nome ?? "Não encontrada";
  }

  if (transacoes.length === 0) {
    return <p>Nenhuma transação cadastrada.</p>;
  }

  return (
    <div>
      <h2>Lista de Transações</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Pessoa</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {transacoes.map((transacao) => (
            <tr key={transacao.transacaoId}>
              <td>{transacao.transacaoId}</td>
              <td>{transacao.descricao}</td>
              <td>{nomePessoa(transacao.pessoaId)}</td>
              <td>{transacao.tipo}</td>
              <td>
                {transacao.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}