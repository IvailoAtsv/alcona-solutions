import { Color } from "./Color"
import { FormWrapper } from "./FormWrapper"

export function ColorsForm({
    firstName,
    lastName,
    age,
    updateFields,
}) {
    const colors = [
        { name: 'Rosewood', display: 'Rosewood', updateFields: updateFields },
        { name: 'Maple', display: 'Maple', updateFields: updateFields },
        { name: 'ReddishBrown', display: 'Reddish Brown', updateFields: updateFields },
        { name: 'Teak', display: 'Teak', updateFields: updateFields },
        { name: 'SandyBrown', display: 'Sandy Brown', updateFields: updateFields },
        { name: 'DarkCoffee', display: 'Dark Coffee', updateFields: updateFields },
        { name: 'LightCoffee', display: 'Light Coffee', updateFields: updateFields },
        { name: 'LightGrey', display: 'Light Grey', updateFields: updateFields },
        { name: 'Black', display: 'Black', updateFields: updateFields },
        { name: 'Green', display: 'Green', updateFields: updateFields },
    ]
    return (
        <FormWrapper title="Изберете цвят">
            <div className="flex flex-wrap gap-2 justify-center items-center">
                {colors.map(color => <Color name={color.name} display={color.display} updateFields={updateFields} />)}
            </div>
        </FormWrapper>
    )
}