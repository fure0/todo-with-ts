interface TodoList {
    setTodo(title:string, content:string): void;
    showTodo(): void;
}

class Todo implements TodoList {
    todoObj: {};

    setTodo(title:string, content:string) {
        this.todoObj = {title:title, content:content};
    }

    showTodo() {
        console.log(this.todoObj);
    }

}

var TodoList = new Todo;
TodoList.setTodo("homework", "study ts");
TodoList.showTodo();