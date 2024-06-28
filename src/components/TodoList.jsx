/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
export default TodoList;
