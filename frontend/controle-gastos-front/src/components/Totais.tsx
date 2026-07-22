import type { TransacaoResponse } from "../models/Transacao";

interface TotaisProps {
  transacoes: TransacaoResponse[];
}

export default function Totais({ transacoes }: TotaisProps) {

  const totalReceitas = transacoes
    .filter((t) => t.tipo.toLowerCase() === "receita")
    .reduce((total, t) => total + t.valor, 0);


  const totalDespesas = transacoes
    .filter((t) => t.tipo.toLowerCase() === "despesa")
    .reduce((total, t) => total + t.valor, 0);


  const saldo = totalReceitas - totalDespesas;


  return (
    <div>

      <h2>Resumo Financeiro</h2>

      <p className="receita">
        💰 Receitas:
        {" "}
        R$ {totalReceitas.toFixed(2)}
      </p>


      <p className="despesa">
        💸 Despesas:
        {" "}
        R$ {totalDespesas.toFixed(2)}
      </p>


      <p className="saldo">
        📊 Saldo:
        {" "}
        R$ {saldo.toFixed(2)}
      </p>

    </div>
  );
}