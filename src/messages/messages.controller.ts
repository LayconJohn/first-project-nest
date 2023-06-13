import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Get()
    findAll() {
        return this.messagesService.findAll()
    }

    @Get(':id')
    async findById(@Param() params) {
        return await this.messagesService.findById(Number(params.id)).catch(err => {
            throw new NotFoundException(err.message);
        })
    }

    @Post()
    create(@Body() body: MessageDto) {
        return this.messagesService.create(body);
    }

    @Put(':id')
    async update(@Param() params, @Body() messageDto: MessageDto) {
        return await this.messagesService.update(Number(params.id), messageDto).catch(err => {
            throw new NotFoundException(err.message);
        });
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.messagesService.delete(Number(params.id));
    }
}
