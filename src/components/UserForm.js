import { FormWrapper } from "./FormWrapper"

export const UserForm = () => {
    return (
        <FormWrapper>
            <div>
                <input placeholder="Име и Фамилия" required />

                <input placeholder="Телефон" />

                <input placeholder="Град" />

                <input placeholder="Област" />

            </div>
        </FormWrapper>
    )
}