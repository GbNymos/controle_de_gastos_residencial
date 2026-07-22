import { apiClient } from "../api/apiClient";
import type { PessoaRequest, PessoaResponse } from "../models/Pessoa";

export function criarPessoa(pessoa: PessoaRequest) {
  return apiClient<PessoaResponse>("/Pessoa", {
    method: "POST",
    body: JSON.stringify(pessoa),
  });
}

export function listarPessoas() {
  return apiClient<PessoaResponse[]>("/Pessoa");
}

export function excluirPessoa(id: number) {
  return apiClient<void>(`/Pessoa/${id}`, {
    method: "DELETE",
  });
}