import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
  define: { underscored: true, timestamps: true },
  logging: false,
});

await sequelize.authenticate();
