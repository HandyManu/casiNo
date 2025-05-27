import React from "react";

const GameCard = ({ game, deleteGame, updateGame }) => {
    return (
        <div className="card shadow-md p-4 rounded-lg">
            <h5 className="text-lg font-bold">{game.nombre}</h5>
            <p>Categoría: {game.categoria}</p>
            <p>Apuesta Mínima: ${game.apuestaMinima}</p>
            <p>Apuesta Máxima: ${game.apuestaMaxima}</p>
            <div className="flex gap-2 mt-4">
                <button
                    className="bg-blue-500 text-red px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => updateGame(game)}
                >
                    Editar
                </button>
                <button
                    className="bg-red-500 text-blue px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => deleteGame(game._id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default GameCard;