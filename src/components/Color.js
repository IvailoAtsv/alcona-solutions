import black from '../colors/Black.png'


export const Color = ({ name, updateFields, display, pic }) => {
    return (
        <div onClick={e => updateFields({ color: e.target.value })} className="flex flex-col justify-center items-center">
            <p>{display}</p>
            <button value={name} >
                <img className='w-24 h-24 rounded-md' src={pic} />
            </button>
        </div>
    )
}