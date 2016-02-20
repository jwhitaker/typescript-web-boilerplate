System.register(["bootstrap", "./main/MessageService"], function(exports_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9NYWluLnRzIl0sIm5hbWVzIjpbIm1haW4iXSwibWFwcGluZ3MiOiI7O0lBSUEsY0FBcUIsRUFBRTtRQUNuQkEsSUFBSUEsY0FBY0EsR0FBb0JBLElBQUlBLCtCQUFjQSxFQUFFQSxDQUFDQTtRQUUzREEsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxTQUFTQSxHQUFHQSxjQUFjQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFDQTtJQUN4RkEsQ0FBQ0E7SUFKRCx1QkFJQyxDQUFBIiwiZmlsZSI6ImFwcC9NYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBJTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tYWluL0lNZXNzYWdlU2VydmljZVwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tYWluL01lc3NhZ2VTZXJ2aWNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKGVsKSB7XG4gICAgbGV0IG1lc3NhZ2VTZXJ2aWNlOiBJTWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5qZWN0ZWQtY29udGVudFwiKS5pbm5lckhUTUwgPSBtZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlKCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
