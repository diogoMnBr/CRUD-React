import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

//nessa rota eu executo o getUsers, é a principal funcção dela
router.get("/", getUsers)

export default router;