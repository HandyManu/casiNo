import React, { useEffect } from "react";
import RegisterGames from "../components/Games/gameRegister";
import GameList from "../components/Games/gameList";
import { Toaster } from "react-hot-toast";

import useDataGame from "../components/Games/hook/useDataGame";

const Games = () => {
    useEffect(() => {
        document.title = "Sucursales";
    }, []);

    const {
        activeTab,
        setActiveTab,
        games,
        setGames,
        loading,
        setLoading,
        error,
        setError,
        handleSubmit,
        deleteGames,
        updateGames,
        handleUpdate,
        cleanData,
        gameName,
        setGameName,
        gameCategory,
        setGameCategory,
        gameMinBet,
        setGameMinBet,
        gameMaxBet,
        setGameMaxBet,
        id,
        setId,
    } = useDataGame();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Juegos</h1>
                <div>
                    <div className="flex border-b border-gray-200 mb-4">
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => setActiveTab("list")}
                        >
                            Lista de Juegos
                        </button>
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => {
                                setActiveTab("form");
                                cleanData();
                            }}
                        >
                            Gestionar Juegos
                        </button>
                    </div>
                    <div>
                        {activeTab === "list" && (
                            <GameList
                                game={games}
                                setGames={setGames}
                                loading={loading}
                                setLoading={setLoading}
                                error={error}
                                setError={setError}
                                deleteGame={deleteGames}
                                updateGame={updateGames}
                            />
                        )}
                        {activeTab === "form" && (
                            <RegisterGames
                                handleUpdate={handleUpdate}
                                gameName={gameName}
                                setGameName={setGameName}
                                gameCategory={gameCategory}
                                setGameCategory={setGameCategory}
                                gameMinBet={gameMinBet}
                                setGameMinBet={setGameMinBet}
                                gameMaxBet={gameMaxBet}
                                setGameMaxBet={setGameMaxBet}
                                handleSubmit={handleSubmit}
                                loading={loading}
                                setLoading={setLoading}
                                error={error}
                                setError={setError}
                                id={id}
                                setId={setId}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    duration: 1000,
                }}
            />
        </div>
    );
};

export default Games;