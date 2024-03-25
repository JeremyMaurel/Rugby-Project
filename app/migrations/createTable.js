import { sequelize } from "../models/associations.js";

console.log("Suppression des tables existantes...");
await sequelize.drop();

console.log("Création des tables...");
await sequelize.sync();

console.log("Migration ok !!! Fermeture de la base de données ...");
await sequelize.close();
