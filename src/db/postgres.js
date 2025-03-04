import Sequelize from "sequelize";
import path from "path";

import { createCuisineModel } from "./models/cuisine.js";
import { parseCsv } from "../utils/csv.js";
import { sanitezeIndianFoodArray } from "../utils/format.js";

let sequelize = null;

const connectToPostgres = async () => {
  try {
    const connStr = process.env.DATABASE_URL;

    sequelize = new Sequelize(connStr, {
      logging: false,
    });

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Initialize models
    const CuisineModel = createCuisineModel(sequelize);

    // Sync models
    await sequelize.sync();

    // Seed data
    const indian_foods = await parseCsv(
      path.join("src", "assets", "indian_food.csv")
    );
    const sanitized_indian_foods = sanitezeIndianFoodArray(indian_foods);

    // inserting data into the database
    for (const food of sanitized_indian_foods) {
      await CuisineModel.findOrCreate({
        where: { name: food.name },
        defaults: food,
      });
    }

    console.log("Database synchronized and seeded successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectToPostgres, sequelize };
