import { Color } from "./Color";
import { FormWrapper } from "./FormWrapper";
import Black from "../colors/Black.png";
import DarkCoffee from "../colors/DarkCoffee.png";
import Green from "../colors/Green.png";
import LightCoffee from "../colors/LightCoffee.png";
import LightGrey from "../colors/LightGrey.png";
import Maple from "../colors/Maple.png";
import ReddishBrown from "../colors/ReddishBrown.png";
import Rosewood from "../colors/Rosewood.png";
import SandyBrown from "../colors/SandyBrown.png";
import Teak from "../colors/Teak.png";

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
