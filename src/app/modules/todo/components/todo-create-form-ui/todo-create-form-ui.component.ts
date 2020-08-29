import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.css']
})
export class TodoCreateFormUiComponent implements OnInit {
  todoName: string = '';

  @Output()
  create: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    if(!this.todoName.trim()) return null;
    this.create.emit(this.todoName);
    this.todoName = '';
  }
}
