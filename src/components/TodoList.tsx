import { useAppSelector } from "../store";

export function TodoList() {
  const todos = useAppSelector((store) => {
    // se o return da função for dessa forma: return store => selecionamos todos os stados que tem na store
    // para seleciona um estado dentro da store, utilizar dessa forma: return store.todoList
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
