import "bootstrap";
import { IMessageService } from "./main/IMessageService";
import { MessageService } from "./main/MessageService";

import "../styles/main.css!";
import "bootstrap/css/bootstrap-theme.css!";
import "bootstrap/css/bootstrap.css!";

console.log("loaded up");

// export function main(el) {
    let messageService: IMessageService = new MessageService();

    document.getElementById("injected-content").innerHTML = messageService.getMessage();
// }
