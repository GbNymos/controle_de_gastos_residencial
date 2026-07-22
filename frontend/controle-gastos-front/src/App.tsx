import Pessoas from "./pages/Pessoas";
import "./style/global.css";

function App() {

  return (
    <div className="container">

      <div className="header">
        <h1>
          💰 Controle de Gastos
        </h1>

        <p>
          Gerencie pessoas, receitas e despesas
        </p>
      </div>


      <Pessoas />

    </div>
  );
}

export default App;