import { Color } from "./Color";
import { FormWrapper } from "./FormWrapper";
import Black from "../colors/Black.webp";
import DarkCoffee from "../colors/DarkCoffee.webp";
import Green from "../colors/Green.webp";
import LightCoffee from "../colors/LightCoffee.webp";
import LightGrey from "../colors/LightGrey.webp";
import Maple from "../colors/Maple.webp";
import ReddishBrown from "../colors/ReddishBrown.webp";
import Rosewood from "../colors/Rosewood.webp";
import SandyBrown from "../colors/SandyBrown.webp";
import Teak from "../colors/Teak.webp";

const colorData = [
  { name: "rosewood", premium: true, display: "Rosewood", pic: Rosewood },
  { name: "maple", display: "Maple", pic: Maple },
  { name: "reddishBrown", display: "Reddish Brown", pic: ReddishBrown },
  { name: "teak", premium: true, display: "Teak", pic: Teak },
  { name: "sandyBrown", display: "Sandy Brown", pic: SandyBrown },
  { name: "darkCoffee", display: "Dark Coffee", pic: DarkCoffee },
  { name: "lightCoffee", display: "Light Coffee", pic: LightCoffee },
  { name: "lightGrey", premium: true, display: "Light Grey", pic: LightGrey },
  { name: "black", display: "Black anthracite", pic: Black },
  { name: "green", premium: true, display: "Green", pic: Green },
];

export function ColorsForm({ updateFields }) {
  return (
    <FormWrapper title="Изберете цвят">
      <div className="w-full h-full flex flex-wrap gap-4 justify-center items-center">
        {colorData.map((color) => (
          <Color
            premium={color.premium}
            name={color.name}
            display={color.display}
            pic={color.pic}
            updateFields={updateFields}
          />
        ))}
      </div>
    </FormWrapper>
  );
}
