import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(
    private productsService: ProductsService
  ) {}

  @Get('/')
  getProducts() {
    return this.productsService.findAll()
  }

  @Delete('/:id')
  deleteProduct(
    @Param('id') id: number
  ) {
    return this.productsService.delete(id)
  }

}
