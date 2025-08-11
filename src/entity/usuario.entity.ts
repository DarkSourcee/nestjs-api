import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    login: string;

    @Column()
    senha: string;
}