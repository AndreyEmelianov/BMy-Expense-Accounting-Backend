import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
  password: string;
}
