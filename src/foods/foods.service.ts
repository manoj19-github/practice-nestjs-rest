import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FoodDocument, FoodEntity } from './entities/food.entity';
import { Model } from 'mongoose';

@Injectable()
export class FoodsService {
  constructor(
    @InjectModel(FoodEntity.name) private foodModel: Model<FoodDocument>,
  ) {}
  async create(createFoodDto: CreateFoodDto): Promise<FoodEntity> {
    return await this.foodModel.create({
      title: createFoodDto.title,
      chef: createFoodDto.chef,
      price: createFoodDto.price,
      rating: createFoodDto.rating,
    });
  }

  async findAll(): Promise<FoodEntity[]> {
    return await this.foodModel.find({});
  }

  async findOne(id: string): Promise<FoodEntity> {
    return await this.foodModel.findById(id);
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    return await this.foodModel.updateOne({ _id: id }, updateFoodDto);
  }

  async remove(id: string) {
    return await this.foodModel.deleteOne({ _id: id });
  }
}
