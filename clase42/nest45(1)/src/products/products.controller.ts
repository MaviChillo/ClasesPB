import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
// import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() newProduct: CreateProductDto) {
    return this.productsService.create(newProduct);
  }

  @Get()
  findAll(@Query() query) {
    console.log('Query', query)
    const products = this.productsService.findAll();
    if(products.length){
      return {message: 'Todos los productos', products}
    }
    throw new HttpException(
      'No se encontraron productos', 
      HttpStatus.NOT_FOUND
    )
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const product = this.productsService.findOne(+id);
    if(product){
      return {message: 'product found', product}
    }
    throw new HttpException(
      'No se enconto producto con ese id', 
      HttpStatus.NOT_FOUND
    )
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
