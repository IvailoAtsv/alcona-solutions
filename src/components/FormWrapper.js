export function FormWrapper({ title, children }) {
  return (
    <div className="flex flex-col text-gray-600 w-full justify-center items-center">
      <h2 className="text-2xl text-center border-b-2 my-4 border-orange-400 font-semibold">
        {title}
      </h2>
      <div className="justify-center p-4 w-[100%] h-full items-center">
        {children}
      </div>
    </div>
  );
}
