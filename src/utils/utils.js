import { Op } from "sequelize";
import _ from "lodash";

const queryParamsToWhereClause = (query) => {
  const whereClause = {};

  for (const key in query) {
    if (typeof query[key] === "object") {
      for (const operator in query[key]) {
        let value = query[key][operator];

        if (typeof value === "string") {
          value = value.toLowerCase();
        }

        value = value === "null" ? null : value;

        if (operator === "eq")
          whereClause[key] = {
            ...whereClause[key],
            [value ? Op.eq : Op.is]: value,
          };
        if (operator === "ne")
          whereClause[key] = {
            ...whereClause[key],
            [value ? Op.eq : Op.is]: value,
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

export { queryParamsToWhereClause };
