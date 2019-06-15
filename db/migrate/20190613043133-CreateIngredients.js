"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Ingredients", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.TEXT,
          unique: true,
        },
        description: {
          type: Sequelize.TEXT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(_results => {
        return queryInterface.createTable("IngredientsRecipes", {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          ingredientId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          recipeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          amount: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          form: {
            type: Sequelize.TEXT,
          },
          notes: {
            type: Sequelize.TEXT,
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        });
      })
      .then(_results => {
        return queryInterface.addIndex("IngredientsRecipes", {
          fields: ["recipeId"],
        });
      })
      .then(_results => {
        return queryInterface.addConstraint(
          "IngredientsRecipes",
          ["recipeId"],
          {
            type: "foreign key",
            references: {
              table: "Recipes",
              field: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
          },
        );
      })
      .then(_results => {
        return queryInterface.addIndex("IngredientsRecipes", {
          fields: ["ingredientId"],
        });
      })
      .then(_results => {
        return queryInterface.addConstraint(
          "IngredientsRecipes",
          ["ingredientId"],
          {
            type: "foreign key",
            references: {
              table: "Recipes",
              field: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
          },
        );
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("IngredientsRecipes").then(results => {
      return queryInterface.dropTable("Ingredients");
    });
  },
};
