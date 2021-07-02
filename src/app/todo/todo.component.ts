import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoArr = [];
  todoText = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(data) {
    this.todoArr.push(data.form.value.todoText);
    console.log(data.form.value.todoText);
    data.reset();
  }

  delete(index){
    this.todoArr.splice(index,1);
  }

}
