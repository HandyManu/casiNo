//importo todos los elemnetos de la ibreria express 

import express from "express";
import gameRoutes from "../Backend/src/routes/games.js"; 
import clientRoutes from "../Backend/src/routes/clients.js";
import cors from "cors"



const app = express();




app.use(express.json());
app.use(
    cors({
      origin: "https://casi-no.vercel.app",   
      //https://casi-no.vercel.app/
      // Permitir envío de cookies y credenciales
      credentials: true
    })
  );
app.use("/api/games", gameRoutes); 
app.use("/api/clients", clientRoutes);




//exporto la constante para usarla cuando quiera 

export default app;