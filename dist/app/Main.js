System.register(["bootstrap", "./main/MessageService", "../styles/main.css!", "bootstrap/css/bootstrap-theme.css!", "bootstrap/css/bootstrap.css!"], function(exports_1) {
    var MessageService_1;
    var messageService;
    return {
        setters:[
            function (_1) {},
            function (MessageService_1_1) {
                MessageService_1 = MessageService_1_1;
            },
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            console.log("loaded up");
            // export function main(el) {
            messageService = new MessageService_1.MessageService();
            document.getElementById("injected-content").innerHTML = messageService.getMessage();
        }
    }
});
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBV1EsY0FBYzs7Ozs7Ozs7Ozs7WUFIdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV6Qiw2QkFBNkI7WUFDckIsY0FBYyxHQUFvQixJQUFJLCtCQUFjLEVBQUUsQ0FBQztZQUUzRCxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7OztBQUN4RixJQUFJIiwiZmlsZSI6ImFwcC9NYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBJTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tYWluL0lNZXNzYWdlU2VydmljZVwiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tYWluL01lc3NhZ2VTZXJ2aWNlXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzcyFcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLXRoZW1lLmNzcyFcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLmNzcyFcIjtcblxuY29uc29sZS5sb2coXCJsb2FkZWQgdXBcIik7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYWluKGVsKSB7XG4gICAgbGV0IG1lc3NhZ2VTZXJ2aWNlOiBJTWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UoKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5qZWN0ZWQtY29udGVudFwiKS5pbm5lckhUTUwgPSBtZXNzYWdlU2VydmljZS5nZXRNZXNzYWdlKCk7XG4vLyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
