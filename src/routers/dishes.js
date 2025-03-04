import express from "express";

import {
  getAllDishes,
  getDishById,
  getDishesByIngredients,
} from "../controllers/dishes.js";

const app = express.Router();

app.get("/by-ingredients", getDishesByIngredients);

app.get("/", getAllDishes);

app.get("/:id", getDishById);

export default app;
