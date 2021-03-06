import {Todo} from '../../model/todo';
import {todoActions, todoActionsType} from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  todoList: Array<Todo>,
  idIncrement: number
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
};

export const todoReducer = (state = initialState, action: todoActions) => {
  switch (action.type) {
    case todoActionsType.create: {
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [...state.todoList, {id: state.idIncrement, name: action.payload.name, completed: false}]
      }
    }
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo),

      };

    default: {
      return state;
    }
  }
};
