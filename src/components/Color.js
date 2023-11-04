import black from "../colors/Black.png";

export const Color = ({ name, updateFields, display, pic }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{display}</p>
      <button
        className="w-24 h-24"
        onClick={(e) => updateFields({ color: name })}
        value={name}
      >
        <img className="w-full h-full rounded-md" src={pic} />
        <p></p>
      </button>
    </div>
  );
};
