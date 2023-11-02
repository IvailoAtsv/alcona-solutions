import { useState } from "react"
// import { CapsForm } from "./CapsForm"
import { DimentionsForm } from "./DimentionsForm"
import { useMultistepForm } from "../useMultistepForm"
import { ColorsForm } from "./ColorsForm"
import { UserForm } from "./UserForm"

const INITIAL_DATA = {
    color: "",
    width: 210,
    height: 180,
    panelCount: 1,
    ledCaps: 0,
    solarCaps: 0,
    plasticCaps: 0,
}

export function MainForm({ cartItems, setCartItems }) {
    const [data, setData] = useState(INITIAL_DATA)
    const [isValid, setIsValid] = useState(true)

    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultistepForm([
            <ColorsForm isValid={isValid} setIsValid={setIsValid} {...data} updateFields={updateFields} />,
            <DimentionsForm isValid={isValid} setIsValid={setIsValid} {...data} updateFields={updateFields} />,
            <UserForm isValid={isValid} setIsValid={setIsValid} {...data} updateFields={updateFields} />
            // <CapsForm isValid={isValid} setIsValid={setIsValid} {...data} updateFields={updateFields} />,
        ])

    function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) return next()
        console.log(data);
    }
    function addToCart(e) {
        setCartItems(prev => [...prev, data])
    }

    return (
        <div className="bg-white text-sm shadow-lg my-4 rounded-md h-auto relative max-w-[1400px] w-[90%]">
            <form onSubmit={onSubmit}>
                <div className="absolute top-1 text-center font-semibold text-lg right-10">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="flex w-11/12 h-12 items-center justify-end mt-9 mr-9">
                    {!isFirstStep && (
                        <button disabled={!isValid} className="py-2 px-6 ml-4 font-semibold bg-orange-400 rounded-md" type="button" onClick={back}>
                            Back
                        </button>
                    )}
                    {isLastStep
                        ? <button onClick={(e) => addToCart(e)} className="py-2 px-6 ml-4 font-semibold bg-orange-400 rounded-md">Add to Cart</button>
                        : <button disabled={!isValid} className={isFirstStep ? 'hidden' : "py-2 px-6 ml-4 font-semibold bg-orange-400 rounded-md"} type="submit">Next </button>
                    }
                </div>
            </form>
        </div>
    )
}

export default MainForm 