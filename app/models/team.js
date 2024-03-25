import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(process.env.PG_URL);

const Team = sequelize.define(
  "team",
  {
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
  },
  { underscored: true, timestamps: true }
);

export default Team;
