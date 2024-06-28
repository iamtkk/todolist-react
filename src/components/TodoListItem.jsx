import { memo } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { CiCircleMinus } from "react-icons/ci";
import cn from "classnames/bind";
/* eslint-disable react/prop-types */
const TodoListItem = ({ todo, onDelete, onToggle }) => {
  const { id, checked, text } = todo;
  return (
    <div className="flex items-center even:bg-gray-100">
      <div
        className={cn("px-4 py-6 text-xl", { "text-[#22b8cf]": checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </div>
      <div
        className={cn(
          "flex-1 text-xl",
          { "line-through": checked },
          { "text-gray-400": checked }
        )}
      >
        {text}
      </div>
      <div
        className="text-red-500 text-2xl px-4 py-2 cursor-pointer"
        onClick={() => onDelete(id)}
      >
        <CiCircleMinus />
      </div>
    </div>
  );
};
export default memo(TodoListItem);
