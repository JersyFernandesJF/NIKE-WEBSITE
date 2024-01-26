import "reflect-metadata";
import { DataSource } from "typeorm";
import {
  Color,
  Cart,
  Category,
  Favourite,
  Order,
  Product,
  Review,
  Size,
  User,
} from "./entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "nike",
  synchronize: true,
  logging: false,
  entities: [
    User,
    Color,
    Cart,
    Category,
    Favourite,
    Order,
    Product,
    Review,
    Size,
  ],
  migrations: [],
  subscribers: [],
});
