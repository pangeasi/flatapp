import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  pic: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;
}
