import { Injectable } from '@nestjs/common';
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

    findById(id: number) {
        return this.messages.find(message => message.id === id);
    }

    create(message: Message) {
        return this.messages.push(message);
    }
}
