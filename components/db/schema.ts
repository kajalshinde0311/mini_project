import { fromTheme } from "tailwind-merge";
import { pgTable, serial, text} from "drizzle-orm/pg-core";
export const courses =pgTable
("courses" ,{
  id:serial("id").primaryKey(),
  title:text("title").notNull(),

});