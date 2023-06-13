import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Get()
    findAll() {
        return this.messagesService.findAll()
    }

    @Get(':id')
    findById(@Param() params) {
        return this.messagesService.findById(Number(params.id))
    }

    @Post()
    create(@Body() body: Message) {
        return this.messagesService.create(body);
    }

    @Put(':id')
    update(@Param() params, @Body() message: Message) {
        return this.messagesService.update(Number(params.id), message);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.messagesService.delete(Number(params.id));
    }
}
