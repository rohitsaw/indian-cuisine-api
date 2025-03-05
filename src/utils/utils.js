import { Op } from "sequelize";
import Sequelize from "sequelize";

const queryParamsToOrder = (sort) => {
  return sort.split(",").map((sortField) => sortField.split(":"));
};

const queryParamsToWhereClause = (query) => {
  let whereClause = {};

  for (const key in query) {
    if (key === "ingredients" && Array.isArray(query[key])) {
      whereClause = {
        ...whereClause,
        [Op.and]: [
          {
            ingredients: {
              [Op.contains]: query[key],
            },
          },
          Sequelize.where(
            Sequelize.fn("array_length", Sequelize.col("ingredients"), 1),
            query[key].length
          ),
        ],
      };
    } else if (typeof query[key] === "object") {
      for (const operator in query[key]) {
        let value = query[key][operator];

        value = value === "null" ? null : value;

        if (operator === "eq")
          whereClause[key] = {
            ...whereClause[key],
            [value ? Op.eq : Op.is]: value,
          };
        if (operator === "ne")
          whereClause[key] = {
            ...whereClause[key],
            [value ? Op.ne : Op.not]: value,
          };
        if (operator === "gt")
          whereClause[key] = { ...whereClause[key], [Op.gt]: value };
        if (operator === "gte")
          whereClause[key] = { ...whereClause[key], [Op.gte]: value };
        if (operator === "lt")
          whereClause[key] = { ...whereClause[key], [Op.lt]: value };
        if (operator === "lte")
          whereClause[key] = { ...whereClause[key], [Op.lte]: value };
      }
    }
  }

  return whereClause;
};

export { queryParamsToWhereClause, queryParamsToOrder };
