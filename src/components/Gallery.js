import about from "../images/about.jpeg";
import quality from "../images/quality.jpg";
import hero3 from "../images/hero3.jpeg";

const images = [about, quality, hero3];

export const Gallery = () => {
  return (
    <div className="w-full flex justify-center items-center h-auto min-h-[80vh] ">
      <div className="w-full max-w-[1400px] gap-3 flex flex-wrap justify-center items-center">
        {images.map((img) => (
          <img
            src={img}
            className="rounded-md hover:z-50 hover:scale-150 duration-300 w-auto h-[250px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};
