import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entity/usuario.entity';
import { UsuarioRepository } from 'src/repository/usuario.repository';
import { UsuarioController } from 'src/controllers/usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [UsuarioRepository],
  controllers: [UsuarioController],
  exports: [UsuarioRepository], 
})
export class UsuarioModule {}
