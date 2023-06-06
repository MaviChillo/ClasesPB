import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productsModel,
    private config: ConfigService,
  ) {}

  create(createProductDto: CreateProductDto) {
    const newProd = this.productsModel.create(createProductDto);
    return newProd;
  }

  findAll() {
    console.log('uri de mongo', this.config.get('MONGO_URI'));
    return this.productsModel.find();
  }

  findOne(id: string) {
    const prod = this.productsModel.findOne({ _id: id });
    return prod;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    // PATCH
    const update = this.productsModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateProductDto },
      { new: true },
    );
    return update;
  }

  remove(id: string) {
    return this.productsModel.findByIdAndDelete({ _id: id });
  }
}
