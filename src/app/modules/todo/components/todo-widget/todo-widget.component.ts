import { Component, OnInit } from '@angular/core';
import {TodoState} from '../../store/todo/todo.reduser';
import {select, Store} from '@ngrx/store';
import {TodoCreateAction, TodoDeleteAction, TodoToggleAction} from '../../store/todo/todo.actions';
import {todoListSelector} from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {
  todoList: [];
  todoList$ = this.store$.pipe(select(todoListSelector));
  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(todoName: string) {
    console.log(todoName);
    this.store$.dispatch(new TodoCreateAction({name: todoName}))
  }

  onDeleteTodo(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({id}))
  }
}
