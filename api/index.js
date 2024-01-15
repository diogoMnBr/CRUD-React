import express from "express";
import cors from "cors";
import userRoutes from "./router/users.js"

const app = express();

app.use(express.json());
app.use(cors());


//CAMINHO INICIAL EU BUSCO a rota userRoutes
app.use("/", userRoutes)

app.listen(8800);