import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Car } from "./models/Car";
import { User } from "./models/User";
import { schema } from "./schemas";

const adapter = new SQLiteAdapter({ schema });

export const database = new Database({
  adapter,
  modelClasses: [User, Car],
});
