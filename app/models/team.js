import { DataTypes } from "sequelize";
import { sequelize } from "./sequelizeClient.js";

const Team = sequelize.define("team", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Team;
