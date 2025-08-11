import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entity/usuario.entity'; // ou outros entities que você tiver

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projeto-api',
      entities: [UsuarioEntity],
      synchronize: true, 
    }),
  ],
})
export class DatabaseModule {}
