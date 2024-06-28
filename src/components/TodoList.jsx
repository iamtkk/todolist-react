/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="min-h-[356px] max-h-[512px] overflow-y-auto">
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
