import GameCard from "./gameCard";

import React from "react";

const GameList = ({ game = [], loading, updateGame, deleteGame }) => {

    return(
        <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-tight">
                Listado de Juegos
            </h1>
            <div className="row justify-center">
                {loading && (
                    <div className="w-full text-center text-gray-500 my-8">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <div>Cargando Juegos...</div>
                    </div>
                )}
                {!loading && game.length === 0 && (
                    <div className="w-full text-center text-gray-400 my-8">
                        No hay Juegos registrados.
                    </div>
                )}
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {Array.isArray(game) && game.map((games) => (
                        <GameCard
                            key={games._id}
                            game={games}
                            deleteGame={deleteGame}
                            updateGame={updateGame}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameList;