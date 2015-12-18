import { IMessageService } from "./IMessageService";

export class MessageService implements IMessageService {
    getMessage(): string {
        return "Hello World";
    }
}
