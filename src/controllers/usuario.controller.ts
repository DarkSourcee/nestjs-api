import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDto } from "src/dto/criaUsuario.dto";
import { UsuarioEntity } from "src/entity/usuario.entity";
import { UsuarioRepository } from "src/repository/usuario.repository";
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Get('/listAll')
  async findAll() {
    return this.usuarioRepository.listarTodos();
  }

  @Get('/listOne/:id')
  async findOne(@Param('id') id: string) {
    return this.usuarioRepository.buscarPorId(id);
  }

  @Post()
  async create(@Body() dadosUsuario: CriaUsuarioDto) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.login = dadosUsuario.login;
    usuarioEntity.senha = dadosUsuario.senha;

    const usuarioCriacao = this.usuarioRepository.salvarUsuario(usuarioEntity);
    return usuarioCriacao;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() dadosUsuario: CriaUsuarioDto) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.id = uuid();
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.login = dadosUsuario.login;
    usuarioEntity.senha = dadosUsuario.senha;

    const usuarioAtualizado = await this.usuarioRepository.editarUsuario(id, usuarioEntity);
      return {
          usuario: usuarioAtualizado,
          message: 'usuário atualizado com sucesso',
      }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.usuarioRepository.deletarUsuario(id);
  }
}