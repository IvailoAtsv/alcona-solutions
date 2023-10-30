import { useState } from "react"
import { AccountForm } from "./AccountForm"
import { DimentionsForm } from "./DimentionsForm"
import { useMultistepForm } from "../useMultistepForm"
import { ColorsForm } from "./ColorsForm"

const INITIAL_DATA = {
    color: "",
    width: 210,
    height: 180,
    panelCount: '',
    email: "",
    password: "",
}

export function MainForm() {
    const [data, setData] = useState(INITIAL_DATA)

    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <ColorsForm {...data} updateFields={updateFields} />,
            <DimentionsForm {...data} updateFields={updateFields} />,
            <AccountForm {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) return next()
        console.log(data);
    }

    return (
        <div className="bg-white text-sm shadow-lg my-4 rounded-md min-h-[45vh] relative w-[90%]">
            <form onSubmit={onSubmit}>
                <div className="absolute top-3 right-10">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="flex w-11/12 h-12 items-center justify-end mt-9 mr-9">
                    {!isFirstStep && (
                        <button className="py-2 px-6 ml-4 font-semibold bg-orange-400 rounded-md" type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    <button className="py-2 px-6 ml-4 font-semibold bg-orange-400 rounded-md" type="submit">{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </form>
        </div>
    )
}

export default MainForm 