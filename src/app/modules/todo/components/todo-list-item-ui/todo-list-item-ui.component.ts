import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css']
})
export class TodoListItemUiComponent implements OnInit {

  @Input() item: Todo;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(event, id: number) {
    event.preventDefault();
    this.toggle.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
