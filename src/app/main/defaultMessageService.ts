import { MessageService } from "./messageService";

export class DefaultMessageService implements MessageService {
    public getMessage(): string {
        return "Hello World!!!!";
    }
}
