import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

//a principal função dessa rota é executar o getUsers na raiz do projeto - return  localhost:8800
router.get("/", getUsers)

export default router;