import { roles } from "../config.json";
import { User } from "discord.js";

export function (user: User): boolean {
  return user.roles.cache.has(roles.mod);
}
