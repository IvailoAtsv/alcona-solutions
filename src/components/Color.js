export const Color = ({ name, updateFields, display }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p>{display}</p>
            <button onClick={e => updateFields({ color: e.target.value })} value={name} className={`w-24 h-24 rounded-md bg-wood${name}`} />
        </div>
    )
}