import { DataTypes, Model } from "sequelize";

const createCuisineModel = (sequelize) => {
  class Cuisine extends Model {}

  Cuisine.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        set(value) {
          this.setDataValue(
            "ingredients",
            value.map((str) => str.toLowerCase())
          );
        },
      },
      diet: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      prep_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cook_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      flavor_profile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      course: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Cuisine",
      tableName: "cuisines",
      timestamps: false,
      indexes: [
        {
          fields: ["name"],
          unique: true,
        },
        {
          fields: ["ingredients"],
          using: "gin",
          operator: "array_ops",
        },
      ],
    }
  );

  return Cuisine;
};

export { createCuisineModel };
