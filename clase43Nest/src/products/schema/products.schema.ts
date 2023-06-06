import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export default class Products {
  @Prop({ unique: true, required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true, default: 0 })
  stock: number;
  @Prop()
  description: string;
}

export const productsSchema = SchemaFactory.createForClass(Products);
