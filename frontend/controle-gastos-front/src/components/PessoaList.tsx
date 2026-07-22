import type { PessoaResponse } from "../models/Pessoa";

interface PessoaListProps {
  pessoas: PessoaResponse[];
  onExcluir: (id: number) => Promise<void>;
}

export default function PessoaList({
  pessoas,
  onExcluir,
}: PessoaListProps) {
  async function excluir(id: number) {
    const confirmar = window.confirm(
      "Deseja realmente excluir esta pessoa?"
    );

    if (!confirmar) return;

    await onExcluir(id);
  }

  if (pessoas.length === 0) {
    return <p>Nenhuma pessoa cadastrada.</p>;
  }

  return (
    <div>
      <h2>Lista de Pessoas</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {pessoas.map((pessoa) => (
            <tr key={pessoa.pessoaId}>
              <td>{pessoa.pessoaId}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.idade}</td>
              <td>
                <button
                  onClick={() => excluir(pessoa.pessoaId)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}