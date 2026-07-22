// Este arquivo centraliza as chamadas HTTP da aplicação,
// criando uma função reutilizável para comunicação com a API.
// Evita repetição de código e mantém o padrão das requisições.

const API_URL = "http://localhost:5044/api";


/**
 * Realiza uma requisição HTTP para o backend.
 * O tipo genérico <T> representa o formato esperado da resposta.
 */
export async function api<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {


    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            headers:{
                "Content-Type":"application/json"
            },
            ...options
        }
    );


    if(!response.ok){

        throw new Error(
            "Erro na requisição"
        );

    }


    return response.json();

}