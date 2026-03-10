import { AnimalCard } from "./components/AnimalCard";
import "./App.css";
import "./theme.css";

function App() {
  return (
    <div>
      <h1>Painel de Monitoramento Selvagem</h1>

      <section className="section">
        <AnimalCard
          name="Tigre de Bengala"
          species="Panthera tigris tigris"
          isDangerous={true}
        />

        <AnimalCard
          name="Lontra"
          species="Lutra lutra"
          isDangerous={false}
        />

        <AnimalCard
          name="Elefante Africano"
          species="Loxodonta africana"
          isDangerous={true}
        />

      </section >
    </div>
  );
}

export default App;