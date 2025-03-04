import { sequelize } from "../postgres.js";

const getAllDishes = async (whereClause) => {
  return sequelize.models.Cuisine.findAll({
    where: whereClause,
    raw: true,
    logging: console.log,
  });
};

const getOneDishById = async (id) => {
  return sequelize.models.Cuisine.findByPk(id, {
    logging: console.log,
  });
};

export { getAllDishes, getOneDishById };
