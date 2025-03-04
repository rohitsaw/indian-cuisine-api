import { sequelize } from "../postgres.js";
import { Op, Sequelize } from "sequelize";

const getAllDishes = async (whereClause) => {
  return sequelize.models.Cuisine.findAll({
    where: whereClause,
    logging: console.log,
    raw: true,
  });
};

const getOneDishById = async (id) => {
  return sequelize.models.Cuisine.findByPk(id, {
    logging: console.log,
  });
};

const getDishesByIngredients = async (ingredients) => {
  return sequelize.models.Cuisine.findAll({
    where: {
      [Op.and]: [
        {
          ingredients: {
            [Op.contains]: ingredients,
          },
        },
        Sequelize.where(
          Sequelize.fn("array_length", Sequelize.col("ingredients"), 1),
          ingredients.length
        ),
      ],
    },
    logging: console.log,
  });
};

export { getAllDishes, getOneDishById, getDishesByIngredients };
