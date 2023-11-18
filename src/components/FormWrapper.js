import { ReactNode } from "react";

export function FormWrapper({ title, children }) {
  return (
    <div className="flex flex-col w-full py-0 sm:h-[450px] h-11/12 justify-center items-center">
      <h2 className="text-2xl my-10 text-center border-b-4 pb-1 px-4 border-background font-semibold">
        {title}
      </h2>
      <div className="justify-center w-[80%] min-h-[450px] items-center">
        {children}
      </div>
    </div>
  );
}
