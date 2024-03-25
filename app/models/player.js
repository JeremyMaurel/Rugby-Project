import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(process.env.PG_URL);

const Player = sequelize.define(
  "player",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "INSERER CHEMIN DE L'IMAGE PAR DEFAUT",
    },
  },
  { underscored: true, timestamps: true }
);

export default Player;
