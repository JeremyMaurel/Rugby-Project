import Player from "./player.js";
import Team from "./team.js";
import { sequelize } from "./sequelizeClient.js";

Team.hasMany(Player, { foreignKey: "club_id", onDelete: "CASCADE" });
Player.belongsTo(Team);

export { Team, Player, sequelize };
