import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../classes/todo-item';

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  //private url = 'https://localhost:7038';
  private url = 'https://ajs-todoapi.azurewebsites.net'

  constructor(private http: HttpClient) { }

  getTodoItems() {
    let endpoint = "/todoitems";
    return this.http.get(this.url + endpoint);
  }

  addTodoItem(todoItem: TodoItem) {
    console.log(todoItem);
    let endpoint = "/todoitems";
    return this.http.post(this.url + endpoint, todoItem);
  }

  deleteTodoItem(id: number) {
    let endpoint = "/todoitems/" + id;
    console.log(endpoint);
    return this.http.delete(this.url + endpoint);
  }
}
