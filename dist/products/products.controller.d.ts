import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("./products.entity").Product[]>;
    deleteProduct(id: number): Promise<import("typeorm").DeleteResult>;
}
