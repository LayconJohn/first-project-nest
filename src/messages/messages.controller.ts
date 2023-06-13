import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
    update(@Param() param, @Body() message: Message) {
        return this.messagesService.update(Number(param.id), message);
    }
}
