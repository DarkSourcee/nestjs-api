import { IsEmail, IsNotEmpty, isString, IsString, MinLength } from "class-validator";

export class CriaUsuarioDto {
    @IsString()
    @IsNotEmpty({ message: 'O campo nome precisa ser preenchido '})
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'O campo login precisa ser preenchido '})
    login: string;

    @IsEmail()
    @IsNotEmpty({ message: 'O campo email precisa ser preenchido '})
    email: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty({ message: 'O campo senha precisa ser preenchido '})
    senha: string;
}