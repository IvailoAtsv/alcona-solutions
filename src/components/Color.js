import black from '../colors/Black.png'


export const Color = ({ name, updateFields, display, pic }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{display}</p>
            <button onClick={e => updateFields({ color: name })} value={name} >
                <img className='w-24 h-24 rounded-md' src={pic} />
            </button>
        </div>
    )
}