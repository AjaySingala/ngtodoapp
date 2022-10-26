import { Component } from '@angular/core';
import { TodoItem } from './classes/todo-item';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: any;

  constructor(private todoService: TodoService) {

  }

  ngOnInit () {
    console.log("ngOnInit()...");
    this.getTodoItems();
  }

  getTodoItems() {
    console.log("getTodoItems()...");
    this.todoService.getTodoItems().subscribe(
      (response) => { this.todoItems = response; console.log(this.todoItems); },
      (error) => { console.log(error); });
  }

  addTodoItem() {
    let item = new TodoItem();
    item.id = 0;
    item.name = "mount everest";
    item.isComplete = false;

    this.todoService.addTodoItem(item).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    );
  }

  deleteTodoItem() {
    this.todoService.deleteTodoItem(3).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    );
  }
}
