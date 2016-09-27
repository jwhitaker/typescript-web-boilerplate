import "bootstrap-sass";
import "../styles/main.scss";
import { MessageService } from "./main/messageService";
import { DefaultMessageService } from "./main/defaultMessageService";

let messageService: MessageService = new DefaultMessageService();

document.getElementById("injected-content").innerHTML = messageService.getMessage();
