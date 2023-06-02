import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()


export class ProductsService {

  products: Product[]

  constructor(){
    this.products = [
      // {name: 'iphone', price: 500, stock: 10, description: 'phone'},
      // {name: 'iphone 2', price: 600, stock: 10}
    ]
  }

  create(newProduct: CreateProductDto) {
    const id = this.products.length 
    ? this.products[this.products.length-1].id+1 
    : 1
    const product = {...newProduct, id}
    this.products.push(product)
    return product;
  }


  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(p => p.id ===id)
    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
