import { IMessageService } from "./IMessageService";

export class MessageService implements IMessageService {
    public getMessage(): string {
        return "Hello World!";
    }
}
