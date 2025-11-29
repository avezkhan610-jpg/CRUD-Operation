import { Sequelize } from "sequelize";
import "dotenv/config";

const { postgres_db, postgress_user, postgress_password, postgress_host } =
  process.env;

export const sequelize = new Sequelize(
  postgres_db,
  postgress_user,
  postgress_password,
  {
    host: postgress_host,
    dialect: "postgres",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};
