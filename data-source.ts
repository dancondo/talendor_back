import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./src/products/products.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: +process.env.DB_PORT,
    username: 'postgres',
    password: 'postgres',
    database: 'talendor',
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations: [],
    subscribers: [],
})