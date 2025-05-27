import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataGame = () => {
    const ApiGames = "http://localhost:4000/api/games";

    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [gameName, setGameName] = useState("");
    const [gameCategory, setGameCategory] = useState("");
    const [gameMinBet, setGameMinBet] = useState("");
    const [gameMaxBet, setGameMaxBet] = useState("");
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const cleanData = () => {
        setId("");
        setGameName("");
        setGameCategory("");
        setGameMinBet("");
        setGameMaxBet("");
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(ApiGames);
            if (!response.ok) throw new Error("Error al obtener los juegos");
            const data = await response.json();
            setGames(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newGame = {
                nombre: gameName,
                categoria: gameCategory,
                apuestaMinima: gameMinBet,
                apuestaMaxima: gameMaxBet,
            };
            const response = await fetch(ApiGames, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newGame),
            });
            if (!response.ok) throw new Error("Error al registrar el juego");
        toast.success("Juego añadido correctamente"); // Mostrar alerta
        fetchData(); // Actualizar la lista de juegos
        cleanData(); // Limpiar los campos
        setActiveTab("list"); // Cambiar a la vista de lista
        } catch (error) {
            toast.error("Error al registrar el juego");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedGame = {
                nombre: gameName,
                categoria: gameCategory,
                apuestaMinima: gameMinBet,
                apuestaMaxima: gameMaxBet,
            };
            const response = await fetch(`${ApiGames}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedGame),
            });
            if (!response.ok) throw new Error("Error al actualizar el juego");
            toast.success("Juego actualizado correctamente");
            fetchData(); // Actualiza la lista de juegos después de actualizar
            setActiveTab("list"); // Cambia a la vista de lista
        } catch (error) {
            toast.error("Error al actualizar el juego");
        }
    };

    const deleteGames = async (id) => {
        try {
            await fetch(`${ApiGames}/${id}`, { method: "DELETE" });
            fetchData(); // Actualiza los juegos después de eliminar
        } catch (error) {
            toast.error("Error al eliminar el juego");
        }
    };

    const updateGames = (dataGames) => {
        setId(dataGames._id);
        setGameName(dataGames.nombre);
        setGameCategory(dataGames.categoria);
        setGameMinBet(dataGames.apuestaMinima);
        setGameMaxBet(dataGames.apuestaMaxima);
        setActiveTab("form");
    };

    return {
        activeTab,
        setActiveTab,
        id,
        setId,
        gameName,
        setGameName,
        gameCategory,
        setGameCategory,
        gameMinBet,
        setGameMinBet,
        gameMaxBet,
        setGameMaxBet,
        games,
        setGames,
        loading,
        setLoading,
        error,
        setError,
        handleSubmit,
        handleUpdate,
        deleteGames,
        updateGames,
        cleanData,
    };
};

export default useDataGame;