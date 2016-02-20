import "bootstrap";
import { IMessageService } from "./main/IMessageService";
import { MessageService } from "./main/MessageService";

export function main(el) {
    let messageService: IMessageService = new MessageService();

    document.getElementById("injected-content").innerHTML = messageService.getMessage();
}
