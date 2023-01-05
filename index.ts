import { AppDataSource } from "./data-source"
import { productsSeeds } from "./src/seed/products.seed"

AppDataSource.initialize().then(async () => {
    await productsSeeds(AppDataSource.manager)
}).catch(error => console.log(error))
