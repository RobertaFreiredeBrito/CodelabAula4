import { DadosBancariosService } from './dados/shared/registro.controller';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DadosBancario } from './dados/shared/registro';

@Controller('dados')
export class DadosBancariosController {

    constructor(
        private registroService: DadosBancariosService
    ) { }

    @Get()
    async getAll() : Promise<DadosBancario[]> {
        return this.registroService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<DadosBancario> {
        return this.registroService.getById(id);
    }

    @Post()
    async create(@Body( ) task: DadosBancario): Promise<DadosBancario> {
        return this.registroService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() registro: DadosBancario): Promise<DadosBancario> {
        registro.id = id;
        return this.registroService.update(registro);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.registroService.delete(id);
    }

}