import { ReactNode } from "react"

export function FormWrapper({ title, children }) {
    return (
        <div className="flex flex-col w-full sm:h-[450px] h-11/12 justify-around items-center">
            <h2 className="text-2xl my-6 text-center font-semibold">
                {title}
            </h2>
            <div className="justify-center w-full items-center">
                {children}
            </div>
        </div>
    )
}