"use strict";
require("bootstrap");
var MessageService_1 = require("./main/MessageService");
require("../styles/main.css!");
require("bootstrap/css/bootstrap.css!");
console.log("loaded up");
function main(el) {
    var messageService = new MessageService_1.MessageService();
    document.getElementById("injected-content").innerHTML = messageService.getMessage();
}
exports.main = main;
