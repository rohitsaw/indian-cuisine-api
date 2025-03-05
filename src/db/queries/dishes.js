import { sequelize } from "../postgres.js";

const getAllDishes = async (whereClause, order, { pageNumber, pageSize }) => {
  const { count, rows: dishes } =
    await sequelize.models.Cuisine.findAndCountAll({
      where: whereClause,
      order: order,
      limit: pageSize,
      offset: (pageNumber - 1) * pageSize,
      raw: true,
      logging: console.log,
    });
  const totalPage = Math.ceil(count / pageSize);
  return {
    pageNumber: pageNumber,
    pageSize: pageSize,
    totalPage: totalPage,
    data: dishes,
  };
};

const getOneDishById = async (id) => {
  return sequelize.models.Cuisine.findByPk(id, {
    logging: console.log,
  });
};

export { getAllDishes, getOneDishById };
