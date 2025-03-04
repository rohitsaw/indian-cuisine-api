import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { connectToPostgres } from "./db/postgres.js";
import dishesRouter from "./routers/dishes.js";

const swaggerDocument = YAML.load("./src/swagger/swagger.yaml");

async function main() {
  await connectToPostgres();

  const app = express();

  app.use(bodyParser.json());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use("/dishes", dishesRouter);

  app.listen(3000, () => console.log("Server running on port 3000"));
}

main();
