var Todo = (function () {
    function Todo() {
    }
    Todo.prototype.setTodo = function (title, content) {
        this.todoObj = { title: title, content: content };
    };
    Todo.prototype.showTodo = function () {
        console.log(this.todoObj);
    };
    return Todo;
})();
var TodoList = new Todo;
TodoList.setTodo("homework", "study ts");
TodoList.showTodo();
