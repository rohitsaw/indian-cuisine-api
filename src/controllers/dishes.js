import {
  getAllDishes as getAllDishesFromDB,
  getOneDishById,
  getDishesByIngredients as getDishesByIngredientsFromDB,
} from "../db/queries/dishes.js";

import { queryParamsToWhereClause } from "../utils/utils.js";
import { convertValuesToStartCase } from "../utils/format.js";

import { validateDishesSchema } from "../validations/dishes.js";

const getAllDishes = async (req, res) => {
  try {
    const { error, value } = validateDishesSchema(req.query);

    if (error) {
      console.error(error);
      return res.status(400).send({ error: error });
    }

    const whereClause = queryParamsToWhereClause(value);

    const dishes = await getAllDishesFromDB(whereClause);
    const sanitizeDishes = convertValuesToStartCase(dishes);

    return res.status(200).send(sanitizeDishes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

const getDishById = async (req, res) => {
  try {
    const dish = await getOneDishById(req.params.id);
    if (dish === null) {
      return res.status(404).send({ error: "Dish not found" });
    }
    return res.status(200).send(dish);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

const getDishesByIngredients = async (req, res) => {
  let ingredients = req.query.ingredients
    .split(",")
    .map((i) => i.trim().toLowerCase());
  try {
    const results = await getDishesByIngredientsFromDB(ingredients);
    return res.status(200).send(results);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

export { getAllDishes, getDishById, getDishesByIngredients };
