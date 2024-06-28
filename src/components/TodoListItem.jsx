/* eslint-disable react/prop-types */
const TodoListItem = ({ todo }) => {
  return <div key={todo.id}>{todo}</div>;
};
export default TodoListItem;
