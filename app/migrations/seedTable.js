import { Team, Player, sequelize } from "../models/associations.js";

console.log("Ajout des équipes");
const blueTeam = await Team.create({ name: "Blue" });
const redTeam = await Team.create({ name: "Rouge" });

console.log("Ajout de joueurs");

const player1 = await Player.create({
  lastname: "Timetre",
  firstname: "Vincent",
  position: "pillier",
  weight: "142",
  height: "193",
  birthday: "1987-01-01",
  team_id: redTeam.id,
});
const player2 = await Player.create({
  lastname: "Touille",
  firstname: "Sacha",
  position: "pillier",
  weight: "132",
  height: "183",
  birthday: "1987-02-02",
  team_id: redTeam.id,
});
const player3 = await Player.create({
  lastname: "Marco",
  firstname: "Polo",
  position: "ailier",
  weight: "82",
  height: "182",
  birthday: "1987-03-03",
  team_id: redTeam.id,
});
const player4 = await Player.create({
  lastname: "Bonneau",
  firstname: "Jean",
  position: "talon",
  weight: "172",
  height: "110",
  birthday: "1987-04-04",
  team_id: blueTeam.id,
});
