import { IsEmail, IsString } from "class-validator";
export class ProductDto {
  @IsString()
  public name?: string;
  @IsString()
  public category?: string;
  @IsString()
  public description?: string;
  @IsString()
  public price?: string;
  @IsString()
  public id?: string;
}
