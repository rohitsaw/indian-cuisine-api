import express from "express";

import { getAllDishes, getDishById } from "../controllers/dishes.js";

const app = express.Router();

app.get("/", getAllDishes);

app.get("/:id", getDishById);

export default app;
