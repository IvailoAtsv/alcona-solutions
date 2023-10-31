import { FormWrapper } from "./FormWrapper"
import solar from '../images/solar.jpg'
import led from '../images/led.png'
import plastic from '../images/plastic.jpg'
import { useEffect, useState } from "react"

export function CapsForm({
    panelCount,
    updateFields,
    plasticCaps,
    ledCaps,
    solarCaps,
    isValid,
    setIsValid,
}) {


    const title = `Изберете вид и брой шапки (общо ${panelCount + 1})`

    const validate = (e) => {
        const current = e.target.name
        const value = Number(e.target.value)
        if (current === 'plastic') updateFields({ plasticCaps: value })
        if (current === 'led') updateFields({ ledCaps: value })
        if (current === 'solar') updateFields({ solarCaps: value })

    }

    useEffect(() => {
        if ((plasticCaps + ledCaps + solarCaps) > panelCount + 1) {
            setIsValid(false)
        } else setIsValid(true)
    }, [plasticCaps, ledCaps, solarCaps])

    return (
        <FormWrapper title={title}>

            <div className="w-full flex justify-evenly items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-xl font-semibold text-center pb-2">Соларна</p>
                    <img src={solar} className='w-60 h-60 rounded-md' />
                    <label className="text-xl font-semibold">Брой:  </label>
                    <input name="solar" type="number" onChange={(e) => validate(e)} className="w-[160px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-xl font-semibold text-center pb-2">LED 12v</p>
                    <img name="Caps" src={led} className='w-60 h-60 rounded-md' />
                    <label className="text-xl font-semibold">Брой: </label>
                    <input type="number" name="led" onChange={(e) => validate(e)} className="w-[160px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className=" text-xl font-semibold text-center pb-2">Пластмасa</p>
                    <img src={plastic} className='w-60 h-60 rounded-md' />
                    <label className="text-xl font-semibold">Брой:  </label>
                    <input type="number" name="plastic" onChange={(e) => validate(e)} className="w-[160px] h-[30px] bg-gray-200 text-xl text-center rounded-md px-2 py-1" />
                </div>
            </div>
            {/* <div className="flex gap-2">
                <input type="radio" />
                <label className="text-xl font-semibold">За всички панели ({panelCount})</label>
            </div> */}
            <p className="text-2xl text-center mt-4 text-red-600 font-bold">{!isValid ? 'Общия брой на шапките не трябва да надвишава броя на панелите!' : ''}</p>
        </FormWrapper>
    )
}