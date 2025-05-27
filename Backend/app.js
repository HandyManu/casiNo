//importo todos los elemnetos de la ibreria express 

import express from "express";
import gameRoutes from "../Backend/src/routes/games.js"; 
import clientRoutes from "../Backend/src/routes/clients.js";


const app = express();




app.use(express.json());
app.use("/api/games", gameRoutes); 
app.use("/api/clients", clientRoutes);




//exporto la constante para usarla cuando quiera 

export default app;