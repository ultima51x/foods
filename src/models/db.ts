import sequelize from "sequelize";

if (!process.env.DATABASE_URL) {
  throw Error("DATABASE_URL is not set");
}

const uri: string = process.env.DATABASE_URL;
const db = new sequelize.Sequelize(uri);

export default db;
