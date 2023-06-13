import { Injectable, Param, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
    private messages: Message[] = [
        {
            id: 1,
            text: "Texto 1"
        },
        {
            id: 2,
            text: "Texto 2"
        }
    ];

    findAll() {
        return this.messages;
    }

    async findById(id: number) {
        const message = this.messages.find(msg => msg.id === id);
        if (!message) {
            throw new Error(`Message with id ${id} not found`);
        }
        return message; 
    }   

    create(messageDto: MessageDto) {
        const id = this.messages.length + 1;
        this.messages.push({...messageDto, id: id});
        return messageDto;
    }

    async update(id: number, messageDto: MessageDto) {
        const index = this.messages.findIndex(msg => msg.id === id);
        if (index < 0) {
            throw new Error(`Message with id ${id} not found`);
        }
        const message: Message = {
            ...messageDto,
            id: id
        } 
        this.messages[index] = message;
        return message;
    }

    delete(id: number) {
        const index = this.messages.findIndex(message => message.id === id);
        delete this.messages[index];
        return true;
    }
}
