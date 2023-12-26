import { IsInt, IsString } from 'class-validator';

export class UserDTO {
  @IsInt()
  id: number;
  @IsString()
  name: string;
  @IsInt()
  role: number;
  @IsString()
  address: string;
  @IsInt()
  marks: number;
}
