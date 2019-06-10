import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import db from "./db";

class Recipe extends Model {
  public id!: number;
  public name!: string;
  public copy!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "Recipes",
  },
);

export default Recipe;
