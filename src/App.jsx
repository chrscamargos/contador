import Contador from "./components/Contador";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Explorador de Estados!</h1>
        <p>Aprenda na prática os 4 principais padrões de uso do hook</p>
        <span>useState</span>
      </header>

      <main className="grid-exemplos">
        <Contador />
      </main>

      <footer className="app-footer">
        <p>Demonstrando o uso do React Hook useState</p>
      </footer>
    </div>
  )
}