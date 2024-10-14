import { Injectable, Param } from '@nestjs/common';
import { RecadoEntity } from './entity/recado.entity';

@Injectable()
export class MessageService {
    lastId: number = 1;
    private recado: RecadoEntity[] = [
        {
            id: this.lastId,
            texto: 'teste',
            de:'teste',
            data: new Date(),
            lido: false,
            para: 'testando'
        }
    ];

    findAll() {
        return this.recado;
    }

    findOne(id: number) {
        if (!id) {
            throw new Error(`O id: ${id} não existe na base de dados`);
        }

        return this.recado.find(item => item.id === +id);
    }

    created(body: any) {
        this.lastId++;
        const id = this.lastId;
        const newMessage = {
            id,
            ...body
        };
        return this.recado.push(newMessage);
    }

    updated() {

    }

    delete(id: number) {
        
    }
}
