import fs from "fs";
import csv from "fast-csv";

const parseCsv = async (filePath) => {
  return new Promise((resolve, reject) => {
    const indian_foods = [];
    fs.createReadStream(filePath)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => reject(error))
      .on("data", (row) => indian_foods.push(row))
      .on("end", (rowCount) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve(indian_foods);
      });
  });
};

export { parseCsv };
