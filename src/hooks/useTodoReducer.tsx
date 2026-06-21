interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOOGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
      };
    }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        length: state.todos.length - 1,
      };

    case 'TOOGLE_TODO': {
      const updatesTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatesTodos,
      };
    }

    default:
      return state;
  }
};

export { TodoReducer };
export type { TodoAction };
