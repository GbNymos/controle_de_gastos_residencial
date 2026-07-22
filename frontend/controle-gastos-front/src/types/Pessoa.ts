//Criando as interfaces para o tipo Pessoa, que será utilizado no frontend e backend
export interface PessoaRequest {
    nome: string;
    idade: number;
}


export interface PessoaResponse {
    pessoaId: number;
    nome: string;
    idade: number;
}