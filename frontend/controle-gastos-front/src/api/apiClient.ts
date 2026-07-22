// Este arquivo centraliza as chamadas HTTP da aplicação,
// criando uma função reutilizável para comunicação com a API.
// Evita repetição de código e mantém o padrão das requisições.

const API_URL = "http://localhost:5044/api";

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Erro na requisição");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}