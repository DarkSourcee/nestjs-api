import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/entity/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly repo: Repository<UsuarioEntity>,
  ) {}

  async salvarUsuario(dadosUsuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.repo.save(dadosUsuario);
  }

  async listarTodos(): Promise<UsuarioEntity[]> {
    return this.repo.find();
  }

  async buscarPorId(id: string): Promise<UsuarioEntity> {
    const usuario = await this.repo.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return usuario;
  }

  async editarUsuario(id: string, dados: Partial<UsuarioEntity>): Promise<UsuarioEntity> {
    const usuario = await this.buscarPorId(id); // garante que existe
    await this.repo.update(id, dados);
    return this.buscarPorId(id);
  }

  async deletarUsuario(id: string): Promise<void> {
    const usuario = await this.buscarPorId(id); // garante que existe
    await this.repo.delete(id);
  }
}
