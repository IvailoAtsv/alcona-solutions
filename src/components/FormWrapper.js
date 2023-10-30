import { ReactNode } from "react"

export function FormWrapper({ title, children }) {
    return (
        <div className="flex flex-col w-full sm:h-[350px] h-11/12 justify-evenly items-center">
            <h2 className="text-2xl  mb-2 text-center font-semibold">
                {title}
            </h2>
            <div className="justify-evenly items-center">
                {children}
            </div>
        </div>
    )
}