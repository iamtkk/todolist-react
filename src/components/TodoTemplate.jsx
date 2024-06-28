// eslint-disable-next-line react/prop-types
const TodoTemplate = ({ children }) => {
  return (
    <section className="w-[512px] mx-auto mt-[6rem] rounded overflow-hidden">
      <div className="bg-[#22b8cf] text-white text-2xl h-16 flex justify-center items-center">
        일정 관리
      </div>
      <div className="bg-white">{children}</div>
    </section>
  );
};
export default TodoTemplate;
