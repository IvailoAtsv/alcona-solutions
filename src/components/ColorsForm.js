import { Color } from "./Color"
import { FormWrapper } from "./FormWrapper"
import Black from '../colors/Black.png'
import DarkCoffee from '../colors/DarkCoffee.png'
import Green from '../colors/Green.png'
import LightCoffee from '../colors/LightCoffee.png'
import LightGrey from '../colors/LightGrey.png'
import Maple from '../colors/Maple.png'
import ReddishBrown from '../colors/ReddishBrown.png'
import Rosewood from '../colors/Rosewood.png'
import SandyBrown from '../colors/SandyBrown.png'
import Teak from '../colors/Teak.png'
import { useEffect } from "react"


export function ColorsForm({
    updateFields,
}) {



    return (
        <FormWrapper title="Изберете цвят">
            <div className="flex flex-wrap gap-2 justify-center items-center">
                <Color name="Rosewood" display="Rosewood" pic={Rosewood} updateFields={updateFields} />
                <Color name="Maple" display="Maple" pic={Maple} updateFields={updateFields} />
                <Color name="ReddishBrown" display="Reddish Brown" pic={ReddishBrown} updateFields={updateFields} />
                <Color name="Teak" display="Teak" pic={Teak} updateFields={updateFields} />
                <Color name="SandyBrown" display="Sandy Brown" pic={SandyBrown} updateFields={updateFields} />
                <Color name="DarkCoffee" display="Dark Coffee" pic={DarkCoffee} updateFields={updateFields} />
                <Color name="LightCoffee" display="Light Coffee" pic={LightCoffee} updateFields={updateFields} />
                <Color name="LightGrey" display="Light Grey" pic={LightGrey} updateFields={updateFields} />
                <Color name="Black" display="Black" pic={Black} updateFields={updateFields} />
                <Color name="Green" display="Green" pic={Green} updateFields={updateFields} />
            </div>
        </FormWrapper>
    )
}