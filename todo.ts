interface TodoList {
    setTodo(title:string, content:string): void;
    showTodo(): void;
}
interface format {
    title: string;
    content: string;
}

class Todo implements TodoList {
    todoObj = [];

    setTodo(title:string, content:string) {
        let tmp = {title:title, content:content} as format;
        this.todoObj.push(tmp);
    }

    showTodo() {
        console.log(this.todoObj);
    }

}

var TodoList = new Todo;
TodoList.setTodo("homework", "study ts");
TodoList.setTodo("array", "ok");
TodoList.showTodo();