import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {

  @Input() todoList: Array<Todo>;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
  }

  onToggle(event, id: number) {

  }
}
