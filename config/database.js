/*eslint-disable*/

const dotenv = require("dotenv");
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};

/*eslint-enable*/
