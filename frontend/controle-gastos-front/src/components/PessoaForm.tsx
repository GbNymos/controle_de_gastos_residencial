import { useState } from "react";
import type { PessoaRequest } from "../models/Pessoa";

interface PessoaFormProps {
  onSalvar: (pessoa: PessoaRequest) => Promise<void>;
}

export default function PessoaForm({ onSalvar }: PessoaFormProps) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onSalvar({
      nome,
      idade: Number(idade),
    });

    setNome("");
    setIdade("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Pessoa</h2>

      <div>
        <label>Nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <label>Idade</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}
