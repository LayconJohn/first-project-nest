import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    private messages = [
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
}
