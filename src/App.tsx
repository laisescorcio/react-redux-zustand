import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

// a tag Provider funciona como o provider da ContextAPI. Ele é o responsável por fornecer os estados para os componentes filhos

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  );
}
