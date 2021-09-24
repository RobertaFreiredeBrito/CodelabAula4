import { Injectable } from '@nestjs/common';
import { DadosBancario } from './registro';

@Injectable()
export class DadosBancarios {
    dados: DadosBancario[] = [
        { id: 1, nome: 'Registro 1', conta: false},
        { id: 2, nome: 'Registro 2', conta: false},
        { id: 3, nome: 'Registro 3', conta: false},
        { id: 4, nome: 'Registro 4', conta: false},
        { id: 5, nome: 'Registro 5', conta: false},
        { id: 6, nome: 'Registro 6', conta: false},
        { id: 7, nome: 'Registro 7', conta: false},
        { id: 8, nome: 'Registro 8', conta: false},
        { id: 9, nome: 'Registro 9', conta: false},
        { id: 10, nome: 'Registro 10', conta: false},
    ];

    getAll() {
        return this.dados;
    }

    getById(id: number){
        const registro = this.dados.find((value) => value.id ==id);
        return registro;
    }

    create(registro: DadosBancario) {
        let lastId = 0;
        if (this.dados.length > 0) {
            lastId = this.dados[this.dados.length - 1].id;
        }

        registro.id = lastId + 1;
        this.dados.push(registro);

        return registro;
    }

    update(registro: DadosBancario) {
        const registroArray = this.getById(registro.id);
        if (registroArray) {
            registroArray.nome = registro.nome;
            registroArray.conta = registro.conta;
        }

        return registroArray;
    }

    delete(id: number) {
        const index = this.dados.findIndex((value) => value.id == id);
        this.dados.splice(index, 1);
    }
}

