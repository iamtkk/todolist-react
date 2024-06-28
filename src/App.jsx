import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: true,
      text: "리액트의 기초 알아보기",
    },
    {
      id: 2,
      checked: true,
      text: "컴포넌트 스타일링해 보기",
    },
    {
      id: 3,
      checked: false,
      text: "일정 관리 앱 만들어 보기",
    },
  ]);

  const ref = useRef(4);

  const onInsert = useCallback(
    (value) => {
      const todo = {
        id: ref.current,
        text: value,
        checked: false,
      };
      setTodos(todos.concat(todo));
      ref.current += 1;
    },
    [todos]
  );

  const onDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
