import { IsEmail, IsString, Length, MinLength } from "class-validator";
import { Trim } from "class-sanitizer";

export class UserSignUpDto {
  @IsString()
  @Trim()
  @MinLength(5, { message: "FirstName should be minimum of 5 characters" })
  public firstName?: string;
  @IsString()
  @Trim()
  @MinLength(5, { message: "LastName should be minimum of 5 characters" })
  public lastName?: string;
  @IsEmail({}, { message: "Provided Email is not valid" })
  @Trim()
  public email?: string;
  @IsString()
  @MinLength(8, { message: "Password should be minimum of 8 characters" })
  public password?: string;
}
