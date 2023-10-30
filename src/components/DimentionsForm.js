import { useState } from "react"
import { FormWrapper } from "./FormWrapper"
import './dimentions.css'
import fence from '../images/fence.png'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export function DimentionsForm({ color, updateFields, }) {
    const [height, setHeight] = useState(180)
    const [width, setWidth] = useState(210)
    const [count, setCount] = useState(1)

    const increment = (e) => {
        e.preventDefault()
        setCount(count => count + 1)
        updateFields({ panelCount: count })
    }
    const decrement = (e) => {
        setCount(count => count - 1)
        e.preventDefault()
    }

    return (
        <>
            <FormWrapper title="Размери">
                <div className="flex items-center flex-col justify-between w-full">

                    <img src={fence} style={{ width: `${width * 1.5}px`, height: `${height * 1.5}px`, }}>
                    </img>

                    <div className="w-full flex flex-col justify-center items-center">

                        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
                            <label className="text-lg font-semibold">Ширина: {width} cm</label>
                            <input className="slider" defaultValue={210} required type="range" onChange={(e) => {
                                updateFields({ width: e.target.value })
                                setWidth(e.target.value)
                            }
                            } min="60" step="30" max="210" />
                        </div>
                        <div className="flex flex-col justify-center items-center w-11/12 h-11/12">
                            <label className="text-lg font-semibold">Височина: {height} cm</label>
                            <input className="slider" required type="range" defaultValue={180} onChange={(e) => {
                                updateFields({ height: e.target.value })
                                setHeight(e.target.value)
                            }
                            } min="80" step="20" max="180" />
                        </div>
                        <div className="flex justify-center items-center pt-4 gap-3">
                            <button onClick={(e) => increment(e)} className="px-6 py-2 bg-orange-300 rounded-md hover:bg-orange-400"><AiOutlinePlus size={24} /></button>
                            <p className="text-center text-xl">{count}</p>
                            <button onClick={(e) => decrement(e)} className="px-6 py-2 bg-orange-300 rounded-md hover:bg-orange-400"><AiOutlineMinus size={24} /></button>
                        </div>

                    </div>
                </div>
            </FormWrapper>
        </>
    )
}