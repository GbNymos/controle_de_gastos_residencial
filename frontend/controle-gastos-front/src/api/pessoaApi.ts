import { api } from "./apiClient";
import type { PessoaRequest, PessoaResponse } from "../models/Pessoa";


// Cadastra uma nova pessoa no sistema
export function cadastrarPessoa(
    pessoa: PessoaRequest
): Promise<PessoaResponse> {

    return api<PessoaResponse>(
        "/Pessoa",
        {
            method: "POST",
            body: JSON.stringify(pessoa)
        }
    );

}