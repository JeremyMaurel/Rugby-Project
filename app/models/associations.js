import Player from "./player.js";
import Team from "./team.js";

Team.hasMany(Player, { foreignKey: "club_id", onDelete: "CASCADE" });
Player.belongsTo(Team);

export { Team, Player };
