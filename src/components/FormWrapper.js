export function FormWrapper({ title, children }) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h2 className="text-2xl my-5 text-center border-b-4  border-background font-semibold">
        {title}
      </h2>
      <div className="justify-center p-12 w-[100%] h-full items-center">
        {children}
      </div>
    </div>
  );
}
