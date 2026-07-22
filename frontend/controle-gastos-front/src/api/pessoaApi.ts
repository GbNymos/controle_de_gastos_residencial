// Arquivo criado temporariamente para testes do endpoint de cadastro de pessoas.
// Não faz parte do fluxo principal da aplicação e pode ser removido caso não seja utilizado.

import { apiClient } from "./apiClient";
import type { PessoaRequest, PessoaResponse } from "../models/Pessoa";


// Cadastra uma nova pessoa no sistema
export function cadastrarPessoa(
    pessoa: PessoaRequest
): Promise<PessoaResponse> {

    return apiClient<PessoaResponse>(
        "/Pessoa",
        {
            method: "POST",
            body: JSON.stringify(pessoa)
        }
    );

}
