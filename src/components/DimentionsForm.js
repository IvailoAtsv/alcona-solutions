import { useState } from "react"
import { FormWrapper } from "./FormWrapper"

export function DimentionsForm({
    street,
    city,
    state,
    zip,
    updateFields,
}) {
    const [widthValid, setWidthValid] = useState(true)
    const validate = (e) => {
        if (e.target.value > 180) {
            setWidthValid(false)
        }
    }
    const inputStyle = 'w-1/2 border-2'
    const pair = 'flex flex-col w-full'
    return (
        <FormWrapper className="flex  w-11/12" title="Размери">
            <div className="w-[350px] flex flex-col">
                <div className={pair}>
                    <label>{widthValid ? 'Ширина' : 'Ширината не може да надвишава 180см !'}</label>
                    <input className={inputStyle} name="width" required onChange={e => validate(e)} />
                </div>
                <div className={pair}>
                    <label>{widthValid ? 'Височина' : 'Височината не може да надвишава 180см !'}</label>
                    <input className={inputStyle} name="height" required onChange={e => validate(e)} />
                </div>
                <div className={pair}>
                    <label>{widthValid ? 'Дължина' : 'Дължината не може да надвишава 180см !'}</label>
                    <input className={inputStyle} name="width" required onChange={e => validate(e)} />
                </div>
            </div>
        </FormWrapper>
    )
}