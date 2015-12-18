/// <reference path="../../typings/tsd.d.ts" />

import "bootstrap";
import { IMessageService } from "./main/IMessageService";
import { MessageService } from "./main/MessageService";

export function main(el) {
    var messageService: IMessageService = new MessageService();

    document.getElementById("injected-content").innerHTML = messageService.getMessage();
}
