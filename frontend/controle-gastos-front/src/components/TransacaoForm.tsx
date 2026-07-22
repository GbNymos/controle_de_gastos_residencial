import { useEffect, useState } from "react";
import type { PessoaResponse } from "../models/Pessoa";
import {
  TipoTransacao,
  type TransacaoRequest,
} from "../models/Transacao";

interface Props {
  pessoas: PessoaResponse[];
  onSalvar: (transacao: TransacaoRequest) => Promise<void>;
}

export default function TransacaoForm({
  pessoas,
  onSalvar,
}: Props) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState(TipoTransacao.Despesa);
  const [pessoaId, setPessoaId] = useState(0);

  const pessoaSelecionada = pessoas.find(
    (p) => p.pessoaId === pessoaId
  );

  useEffect(() => {
    if (pessoas.length > 0 && pessoaId === 0) {
      setPessoaId(pessoas[0].pessoaId);
    }
  }, [pessoas]);

  useEffect(() => {
    if (pessoaSelecionada && pessoaSelecionada.idade < 18) {
      setTipo(TipoTransacao.Despesa);
    }
  }, [pessoaSelecionada]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSalvar({
      descricao,
      valor,
      tipo,
      pessoaId,
    });

    setDescricao("");
    setValor(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Transação</h2>

      <div>
        <label>Pessoa</label>

        <select
          value={pessoaId}
          onChange={(e) =>
            setPessoaId(Number(e.target.value))
          }
        >
          {pessoas.map((p) => (
            <option key={p.pessoaId} value={p.pessoaId}>
              {p.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Descrição</label>

        <input
          value={descricao}
          onChange={(e) =>
            setDescricao(e.target.value)
          }
        />
      </div>

      <div>
        <label>Valor</label>

        <input
          type="number"
          value={valor}
          onChange={(e) =>
            setValor(Number(e.target.value))
          }
        />
      </div>

      <div>
        <label>Tipo</label>

        <select
          value={tipo}
          onChange={(e) =>
            setTipo(Number(e.target.value) as typeof tipo)
          }
        >
          <option value={TipoTransacao.Despesa}>
            Despesa
          </option>

          {(!pessoaSelecionada ||
            pessoaSelecionada.idade >= 18) && (
            <option value={TipoTransacao.Receita}>
              Receita
            </option>
          )}
        </select>
      </div>

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}