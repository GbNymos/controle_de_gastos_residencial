import { apiClient } from "../api/apiClient";
import type {
  TransacaoRequest,
  TransacaoResponse,
} from "../models/Transacao";

export function listarTransacoes() {
  return apiClient<TransacaoResponse[]>("/Transacao");
}

export function criarTransacao(transacao: TransacaoRequest) {
  return apiClient<TransacaoResponse>("/Transacao", {
    method: "POST",
    body: JSON.stringify(transacao),
  });
}