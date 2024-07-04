import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((store) => {
    // se o return da função for dessa forma: return store => selecionamos todos os stados que tem na store
    // para seleciona um estado dentro da store, utilizar dessa forma: return store.todoList
    return store.todo;
  });

  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
