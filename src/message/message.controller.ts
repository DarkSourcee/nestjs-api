import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @HttpCode(HttpStatus.OK)
    @Get('/findAll')
    findAll() {
        return this.messageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.messageService.findOne(id);
    }

    @Post()
    created(@Body() body: any) {
        return this.messageService.created(body);
    }

    @Patch(':id')
    updated(@Param('id') id: number, @Body() body: any) {

    }

    @Delete(':id')
    delete(@Param('id') id: number) {

    }
}
