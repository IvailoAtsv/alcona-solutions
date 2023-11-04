import { useState } from "react";
import { FormWrapper } from "./FormWrapper";

export const UserForm = ({ isValid, setIsValid, updateFields }) => {
  const inputStyle =
    "border-2 px-9 py-2 w-[40%] rounded-md text-black foucs:border-orange-300 focus:ring-0 focus:outline-orange-300";

  const labelStyle = "text-xl text-center mt-4 text-red-600 font-bold";

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const validatePhone = (e) => {
    if (e.target.value && e.target.value.length !== 10) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
      updateFields({ phone: e.target.value });
    }
  };

  const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const validateEmail = (e) => {
    if (regEx.test(e.target.value)) {
      setIsEmailValid(true);
      updateFields({ email: e.target.value });
    } else {
      setIsEmailValid(false);
    }
  };

  const pickUp = (e) => {
    updateFields({ pickUp: true });
  };

  return (
    <FormWrapper title="Данни за поръчка">
      <div className="flex flex-col w- full h-full justify-evenly items-center">
        <p>До адрес (доплащане )</p>
        <label className={labelStyle}></label>
        <input
          name="name"
          onChange={(e) => updateFields({ name: e.target.value })}
          className={inputStyle}
          placeholder="Име и Фамилия"
          required
        />

        <label className={labelStyle}>
          {!isEmailValid ? "Въведете валиден е-мейл" : ""}
        </label>
        <input
          name="email"
          onChange={(e) => validateEmail(e)}
          className={inputStyle}
          placeholder="e-mail"
          required
        />

        <label className={labelStyle}>
          {!isPhoneValid ? "Въведете валиден телефонен номер" : ""}
        </label>
        <input
          name="phone"
          onChange={(e) => validatePhone(e)}
          className={inputStyle}
          placeholder="Телефон"
          required
        />

        <label className={labelStyle}></label>
        <input
          required
          name="city"
          onChange={(e) => updateFields({ city: e.target.value })}
          className={inputStyle}
          placeholder="Град"
        />

        <label className={labelStyle}></label>
        <input
          required
          onChange={(e) => updateFields({ area: e.target.value })}
          name="area"
          className={inputStyle}
          placeholder="Област"
        />
        <p className="pt-5">Или</p>
        <button
          name="pickUp"
          type="submit"
          onClick={() => updateFields({ pickUp: true })}
          className="py-2 px-2 w-[40%] font-bold mt-5 hover:bg-orange-300 bg-orange-400 rounded-md"
        >
          Взимане от място
        </button>
      </div>
    </FormWrapper>
  );
};
