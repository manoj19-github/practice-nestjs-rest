import { IsString, Length, Max, Min } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @Length(4, 20)
  title: string;
  @IsString()
  @Length(4, 20)
  chef: string;
  @Max(5000)
  @Min(10)
  price: number;
  @Min(0)
  @Max(5)
  rating: number;
}
