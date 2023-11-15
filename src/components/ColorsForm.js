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
import { useEffect } from "react";
const premium = ["teak", "lightGrey", "green", "rosewood"];

export function ColorsForm({ updateFields }) {
  return (
    <FormWrapper title="Изберете цвят">
      <div className="flex flex-wrap justify-around gap-2 items-center">
        <Color
          premium={true}
          name="rosewood"
          display="Rosewood"
          pic={Rosewood}
          updateFields={updateFields}
        />
        <Color
          name="maple"
          display="Maple"
          pic={Maple}
          updateFields={updateFields}
        />
        <Color
          name="reddishBrown"
          display="Reddish Brown"
          pic={ReddishBrown}
          updateFields={updateFields}
        />
        <Color
          name="teak"
          premium={true}
          display="Teak"
          pic={Teak}
          updateFields={updateFields}
        />
        <Color
          name="sandyBrown"
          display="Sandy Brown"
          pic={SandyBrown}
          updateFields={updateFields}
        />
        <Color
          name="darkCoffee"
          display="Dark Coffee"
          pic={DarkCoffee}
          updateFields={updateFields}
        />
        <Color
          name="lightCoffee"
          display="Light Coffee"
          pic={LightCoffee}
          updateFields={updateFields}
        />
        <Color
          premium={true}
          name="lightGrey"
          display="Light Grey"
          pic={LightGrey}
          updateFields={updateFields}
        />
        <Color
          name="black"
          display="Black anthracite"
          pic={Black}
          updateFields={updateFields}
        />
        <Color
          name="green"
          premium={true}
          display="Green"
          pic={Green}
          updateFields={updateFields}
        />
      </div>
    </FormWrapper>
  );
}
