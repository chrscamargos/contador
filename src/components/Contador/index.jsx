import { useState } from "react";
import "./style.css"

export default function Contador() {
    const [contador, setContador] = useState(0);
    const [passo, setPasso] = useState(1);

    function Incrementar() {
        setContador(valorAnterior => valorAnterior + passo);
    }

    function Decrementar() {
        setContador(valorAnterior => valorAnterior - passo);
    }

    function Reset() {
        setContador(0);
    }

    return (
        <div className="card-exemplo">
            <div className="card-header">
                <span className="badge">1. Estado Numérico</span>
                <h3>Contador com Passo Customizado</h3>
            </div>

            <div className="contador-display">
                <span className="numero-contador">{contador}</span>
            </div>

            <div className="passo-container">
                <label htmlFor="passo-input">
                    Passo do incremento
                </label>
                <input type="number" min="1" max="10" value={passo} id="passo-input"
                    onChange={(e) => setPasso(Number(e.target.value))} 
                />
            </div>

            <div className="botoes-grupo">
                <button className="btn-decrementar" onClick={Decrementar}> - {passo}</button>
                <button className="btn-reset" onClick={Reset}> Zerar </button>
                <button className="btn-incrementar" onClick={Incrementar}> + {passo}</button>
            </div>

            <div className="explicacao-box">
                <code>const [contador, setContador] = useState(0);</code>
                <p>O estado armazena o valor numérico que é renderizado a cada alteração.</p>
            </div>
        </div>
    );
}