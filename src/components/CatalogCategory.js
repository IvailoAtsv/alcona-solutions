export const CatalogCard = ({ img, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${"bg-white"} hover:translate-y-[-7px] aspect-square flex p-2 group transition duration-500 cursor-pointer hover:shadow-xl rounded-md justify-center items-center flex-col`}
    >
      <img
        src={img}
        alt="item"
        className="h-[70%] rounded-md group-hover:scale-105 transition duration-500"
      />
      <h3 className="transition text-center mt-2 duration-500 group-hover:translate-y-[5px] text-gray-600 text-md md:text-lg font-normal">
        {title}
      </h3>
    </div>
  );
};
