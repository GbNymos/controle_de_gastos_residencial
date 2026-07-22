import { useEffect, useState } from "react";

import PessoaForm from "../components/PessoaForm";
import PessoaList from "../components/PessoaList";
import TransacaoForm from "../components/TransacaoForm";
import TransacaoList from "../components/TransacaoList";
import Totais from "../components/Totais";

import type { PessoaRequest, PessoaResponse } from "../models/Pessoa";
import type {
  TransacaoRequest,
  TransacaoResponse,
} from "../models/Transacao";

import {
  listarPessoas,
  criarPessoa,
  excluirPessoa,
} from "../services/pessoaService";

import {
  listarTransacoes,
  criarTransacao,
} from "../services/transacaoService";

export default function Pessoas() {
  const [pessoas, setPessoas] = useState<PessoaResponse[]>([]);
  const [transacoes, setTransacoes] = useState<TransacaoResponse[]>([]);

  useEffect(() => {
    carregarTudo();
  }, []);

  async function carregarTudo() {
    await carregarPessoas();
    await carregarTransacoes();
  }

  async function carregarPessoas() {
    const dados = await listarPessoas();
    setPessoas(dados);
  }

  async function carregarTransacoes() {
    const dados = await listarTransacoes();
    setTransacoes(dados);
  }

  async function salvarPessoa(pessoa: PessoaRequest) {
    await criarPessoa(pessoa);
    await carregarPessoas();
  }

  async function removerPessoa(id: number) {
    await excluirPessoa(id);
    await carregarTudo();
  }

  async function salvarTransacao(transacao: TransacaoRequest) {
    await criarTransacao(transacao);
    await carregarTransacoes();
  }

  return (
    <div style={{ padding: "20px" }}>
      <PessoaForm onSalvar={salvarPessoa} />

      <hr />

      <PessoaList
        pessoas={pessoas}
        onExcluir={removerPessoa}
      />

      <hr />

      <TransacaoForm
        pessoas={pessoas}
        onSalvar={salvarTransacao}
      />

      <hr />

      <TransacaoList
        pessoas={pessoas}
        transacoes={transacoes}
      />
      <hr />

        <Totais
        transacoes={transacoes}
/>
    </div>
  );
}