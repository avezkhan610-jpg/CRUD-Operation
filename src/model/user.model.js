import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
