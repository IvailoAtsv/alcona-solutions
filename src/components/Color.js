
const premium = ''

export const Color = ({ name, updateFields, display, pic }) => {
  return (
    <div className="flex flex-col justify-center group items-center">
      <p>{display}</p>
      <button
        className="w-24 h-24"
        onClick={(e) => updateFields({ color: name })}
        value={name}
      >
        <img className="w-full h-full rounded-md hover:border-2" src={pic} />
        <p className=" hidden">Prmeium</p>
      </button>
    </div>
  );
};
