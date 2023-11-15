import { BiCrown } from "react-icons/bi";
const premium = ["teak", "lightGrey", "green", "rosewood"];

export const Color = ({ name, updateFields, display, pic }) => {
  return (
    <div className="flex flex-col justify-center group items-center">
      <p>{display}</p>
      {premium.includes(name) && (
        <p className="text-lg ease-out duration-150 transition text-white absolute group-hover:opacity-[100] mt-4 opacity-[0] font-bold">
          <BiCrown size={32} />
        </p>
      )}
      <button
        className="w-24 h-24"
        onClick={(e) => updateFields({ color: name })}
        value={name}
      >
        <img
          className="w-full h-full rounded-md border-white group-hover:border-2"
          src={pic}
        />
        <p className=" hidden">Prmeium</p>
      </button>
    </div>
  );
};
