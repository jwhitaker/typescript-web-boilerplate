System.register(["bootstrap", "./main/MessageService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageService_1;
    function main(el) {
        var messageService = new MessageService_1.MessageService();
        document.getElementById("injected-content").innerHTML = messageService.getMessage();
    }
    exports_1("main", main);
    return {
        setters:[
            function (_1) {},
            function (MessageService_1_1) {
                MessageService_1 = MessageService_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsY0FBcUIsRUFBRTtRQUNuQixJQUFJLGNBQWMsR0FBb0IsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFFM0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEYsQ0FBQztJQUpELHVCQUlDLENBQUEiLCJmaWxlIjoiYXBwL01haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJib290c3RyYXBcIjtcbmltcG9ydCB7IElNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21haW4vSU1lc3NhZ2VTZXJ2aWNlXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21haW4vTWVzc2FnZVNlcnZpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oZWwpIHtcbiAgICBsZXQgbWVzc2FnZVNlcnZpY2U6IElNZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmplY3RlZC1jb250ZW50XCIpLmlubmVySFRNTCA9IG1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2UoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
