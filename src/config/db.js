import { Sequelize } from "sequelize";
import "dotenv/config";

const { postgres_user, postgres_password, postgres_db, postgres_host } =
  process.env;

export const sequelize = new Sequelize( postgres_db, postgres_user, postgres_password, {
  host: postgres_host,
  dialect: "postgres",
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};
