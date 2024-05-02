import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  username: string;

  @Prop()
  vip: boolean;

  @Prop()
  fullName: string;

  @Prop()
  description: string;

  @Prop()
  watch: number;

  @Prop()
  salary: number;

  @Prop()
  contacts: string;

  @Prop()
  email: string;

  @Prop()
  location: string;

  @Prop()
  verification: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
