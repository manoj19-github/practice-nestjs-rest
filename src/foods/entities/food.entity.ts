import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = FoodEntity & Document;

@Schema()
export class FoodEntity {
 @Prop()
  title: string;
  @Prop()
  chef: string;
  @Prop()
  price: number;
  @Prop()
  rating: number;
}

export const FoodSchema = SchemaFactory.createForClass(FoodEntity);
