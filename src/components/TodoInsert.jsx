/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { TbPlus } from "react-icons/tb";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <div>
      <form className="flex" onSubmit={onSubmit}>
        <input
          className="flex-1 bg-gray-700 text-white text-lg placeholder-[#dee2e6] px-3 py-2 outline-none"
          placeholder="할 일을 입력해주세요"
          type="text"
          value={value}
          onChange={onChange}
        />
        <button
          className="flex justify-center items-center bg-[#868e96] px-4 text-white text-2xl hover:bg-[#adb4bd] transition-all duration-100 ease-in"
          type="submit"
        >
          <TbPlus />
        </button>
      </form>
    </div>
  );
};
export default TodoInsert;
