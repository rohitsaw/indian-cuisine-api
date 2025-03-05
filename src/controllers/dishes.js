import {
  getAllDishes as getAllDishesFromDB,
  getOneDishById,
} from "../db/queries/dishes.js";

import {
  queryParamsToWhereClause,
  queryParamsToOrder,
} from "../utils/utils.js";
import { convertValuesToStartCase } from "../utils/transform.js";

import { validateDishesSchema } from "../validations/dishes.js";

const getAllDishes = async (req, res) => {
  try {
    const { error, value } = validateDishesSchema(req.query);

    if (error) {
      console.error(error);
      return res.status(400).send({ error: error });
    }

    const { pagination, sort, ...filteredValueForWhereClause } = value;

    const whereClause = queryParamsToWhereClause(filteredValueForWhereClause);
    const orderClause = queryParamsToOrder(sort);

    const dishes = await getAllDishesFromDB(
      whereClause,
      orderClause,
      pagination
    );
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

export { getAllDishes, getDishById };
