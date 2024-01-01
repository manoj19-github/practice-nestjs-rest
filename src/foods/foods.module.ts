import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodEntity, FoodSchema } from './entities/food.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FoodEntity.name, schema: FoodSchema }]),
  ],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
