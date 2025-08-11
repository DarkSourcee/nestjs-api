import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario.module';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [UsuarioModule, DatabaseModule],
})
export class AppModule {}
