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
    const [success, setSuccess] = useState(false);
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
        if (!gameName || !gameCategory || !gameMinBet || !gameMaxBet) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        try {
            const newGame = {
                name: gameName,
                category: gameCategory,
                gameMinBet: gameMinBet,
                gameMaxBet: gameMaxBet,
            };
            const response = await fetch(ApiGames, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newGame),
            });
            if (!response.ok) throw new Error("Error al registrar el juego");
            toast.success(" Juego registrado con éxito");
            setSuccess("El juego se ha registrado con éxito");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al registrar el juego");
        } finally {
            setLoading(false);
        }
    };

    const deleteGames = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${ApiGames}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar el juego");
            toast.success("Sucrsal eliminada con éxito");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al eliminar el juego");
        } finally {
            setLoading(false);
        }
    };

    const UpdateGames = (dataGames) => {
        setId(dataGames._id);
        setBranchName(dataGames.name);
        setGameCategory(dataGames.category);
        setGameMinBet(dataGames.gameMinBet);
        setGameMaxBet(dataGames.gameMaxBet);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => {

        e.preventDefault();
        if (!gameName || !gameCategory || !gameMinBet || !gameMaxBet) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        console.log("id:", id);
        try {
            const updateGames = {
                name: gameName,
                category: gameCategory,
                gameMinBet: gameMinBet,
                gameMaxBet: gameMaxBet,
            };
            const response = await fetch(`${ApiGames}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateGames),
            });
            if(!response.ok) throw new Error("Error al actualizar el juego");

            toast.success("El juego se ha  actualizado con éxito");
            setSuccess("El juego se ha actualizado con éxito");
            cleanData();
            //setActiveTab("list");
            console.log("en funcion update");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al actualizar el juego");
        } finally {
            setLoading(false);
        }
    };

    console.log("games:", games);

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
        loading,
        success,
        error,
        handleSubmit,
        deleteGames,
        UpdateGames,
        handleUpdate,
        cleanData,
        
    };


}

export default useDataGame;