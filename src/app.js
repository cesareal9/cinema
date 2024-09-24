import express from "express";
import "dotenv/config";
import filme_router from "./routes/filme_route.js";
import user_router from "./routes/user_route.js";

const app = express();

app.use(express.json());

app.use("/filme", filme_router);
app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executado"));