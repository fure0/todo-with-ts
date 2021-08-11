var Todo = /** @class */ (function () {
    function Todo() {
        this.todoObj = [];
    }
    Todo.prototype.setTodo = function (title, content) {
        var tmp = { title: title, content: content };
        this.todoObj.push(tmp);
    };
    Todo.prototype.showTodo = function () {
        console.log(this.todoObj);
    };
    return Todo;
}());
var TodoList = new Todo;
TodoList.setTodo("homework", "study ts");
TodoList.setTodo("array", "ok");
TodoList.showTodo();
