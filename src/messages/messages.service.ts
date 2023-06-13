import { Injectable, Param, Put } from '@nestjs/common';
import { Message } from './Message';

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

    create(message: Message) {
        return this.messages.push(message);
    }

    update(id: number, message: Message) {
        const index = this.messages.findIndex(message => message.id === id);
        return this.messages[index] = message;
    }

    delete(id: number) {
        const index = this.messages.findIndex(message => message.id === id);
        delete this.messages[index];
        return true;
    }
}
