import React from "react";

const GameRegister = ({
    setGameName,
    gameName,
    setGameCategory,
    gameCategory,
    setGameMinBet,
    gameMinBet,
    setGameMaxBet,
    gameMaxBet,
    id,
    handleSubmit,
    handleUpdate,
}) => (
    <>
        <style>
            {`
                form {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                ul li {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    padding: 8px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            `}
        </style>
        <form onSubmit={id ? handleUpdate : handleSubmit}>
            <h1>{id ? `Actualizar Juego (ID: ${id})` : "Registrar juego"}</h1>
            <ul>
                <li>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre del Juego"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        required    
                    />
                </li>
                <li>
                    <label>Categoria:</label>
                    <input
                        type="text"
                        placeholder="Categoria del Juego"
                        value={gameCategory}
                        onChange={(e) => setGameCategory(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Apuesta Minima:</label>
                    <input
                        type="number"
                        placeholder="Apuesta Minima"
                        value={gameMinBet}
                        onChange={(e) => setGameMinBet(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Apuesta Maxima:</label>
                    <input
                        type="number"
                        placeholder="Apuesta Maxima"
                        value={gameMaxBet}
                        onChange={(e) => setGameMaxBet(e.target.value)}
                        required
                    />
                </li>
            </ul>
            <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
        </form>
    </>
);

export default GameRegister;