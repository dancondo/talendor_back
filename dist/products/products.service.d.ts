import { Product } from './products.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
