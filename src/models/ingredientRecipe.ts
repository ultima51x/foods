import { Model, DataTypes } from "sequelize";
import Ingredient from "./ingredient";
import Recipe from "./recipe";
import db from "./db";

class IngredientRecipe extends Model {
  public id!: number;
  public ingredientId!: number;
  public recipeId!: number;
  public amount!: string;
  public form?: string;
  public notes?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

IngredientRecipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    form: {
      type: DataTypes.TEXT,
    },
    notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: db,
    tableName: "IngredientsRecipes",
  },
);

Ingredient.hasMany(IngredientRecipe);
Recipe.hasMany(IngredientRecipe);

Ingredient.belongsToMany(Recipe, {
  through: {
    model: IngredientRecipe,
    unique: false,
  },
  foreignKey: "ingredientId",
  constraints: true,
});

Recipe.belongsToMany(Ingredient, {
  through: {
    model: IngredientRecipe,
    unique: false,
  },
  foreignKey: "recipeId",
  constraints: true,
});

export default IngredientRecipe;
