export const TipoTransacao = {
  Despesa: 1,
  Receita: 0,
} as const;

export type TipoTransacao =
  (typeof TipoTransacao)[keyof typeof TipoTransacao];

export interface TransacaoRequest {
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  pessoaId: number;
}

export interface TransacaoResponse {
  transacaoId: number;
  descricao: string;
  valor: number;
  tipo: string;
  pessoaId: number;
}