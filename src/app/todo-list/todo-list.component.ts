import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];
  newTodo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if(this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }

  delete(index: number): void {
    this.todos.splice(index, 1);
  }

}
