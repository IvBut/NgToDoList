import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo/todo.reduser';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import {RouterModule} from '@angular/router';
import { TodoWidgetComponent } from './components/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './components/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from '@angular/forms';
import { TodoListUiComponent } from './components/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './components/todo-list-item-ui/todo-list-item-ui.component';



@NgModule({
  declarations: [TodoPageComponent, TodoWidgetComponent, TodoCreateFormUiComponent, TodoListUiComponent, TodoListItemUiComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: TodoPageComponent
      }
    ]),
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    FormsModule
  ]
})
export class TodoModule { }
