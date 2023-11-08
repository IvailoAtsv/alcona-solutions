import { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";

export const UserForm = ({ isValid, setIsValid, cartItems, orderStatus, setOrderStatus, userData, setUserData }) => {
  const inputStyle =
    "border-2 px-9 py-2 sm:w-[40%] w-[90%] rounded-md text-black foucs:border-background focus:ring-0 focus:outline-background";

  const labelStyle = "text-xl text-center mt-4 text-red-600 font-bold";

  // const initial = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   city: '',
  //   area: '',
  //   pickUp: false,
  // }

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isAreaValid, setIsAreaValid] = useState(true);
  const [clickable, setClickable] = useState(false)

  function updateFields(fields) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const validatePhone = (e) => {
    if (e.target.value && e.target.value.length !== 10) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
      updateFields({ phone: e.target.value });
    }
  };

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const validateEmail = (e) => {
    if (regEx.test(e.target.value)) {
      setIsEmailValid(true);
      updateFields({ email: e.target.value });
    } else {
      setIsEmailValid(false);
    }
  };

  const validateName = (e) => {
    if (e.target.value.length < 4) {
      setIsNameValid(false)
    } else {
      setIsNameValid(true)
      updateFields({ name: e.target.value })
    }
  }
  const validateCity = (e) => {
    if (e.target.value.length < 4) {
      setIsCityValid(false)
    } else {
      setIsCityValid(true)
      updateFields({ city: e.target.value })
    }
  }
  const validateArea = (e) => {
    if (e.target.value.length < 4) {
      setIsAreaValid(false)
    } else {
      setIsAreaValid(true)
      updateFields({ area: e.target.value })
    }
  }

  const handlePickup = (e) => {
    updateFields({ pickUp: true });
    console.log(cartItems);
  };

  const handleDelivery = () => {
    console.log(userData);
    console.log(cartItems);
  }

  useEffect(() => {
    if (isEmailValid && isPhoneValid && isNameValid && isCityValid && isAreaValid) {
      setClickable(true)
    } else {
      setClickable(false)
    }
  }, [userData])
  return (
    <div className="flex flex-col w-full py-0 sm:min-h-[450px] h-11/12 justify-around  items-center">
      <h1 className="text-3xl mb-10 font-semibold border-b-4 pb-1 px-4 border-background">Данни за Поръчка</h1>
      <div className="flex flex-col w-full h-full justify-evenly items-center">
        <button
          name="pickUp"
          type="submit"
          onClick={handlePickup}
          className="rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white w-[90%] sm:w-[40%]"
        >
          Взимане от склад
        </button>
        <p className="pt-2">Или</p>
        {/* <p>Доставка до адрес (доплащане )</p> */}
        <label className={labelStyle}>{!isNameValid ? "Въведете име" : ""}</label>
        <input
          value={userData.name}
          name="name"
          onChange={(e) => validateName(e)}
          className={inputStyle}
          placeholder="Име и Фамилия"
          required
        />

        <label className={labelStyle}>
          {!isEmailValid ? "Въведете валиден е-мейл" : ""}
        </label>
        <input
          value={userData.email}
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
          value={userData.phone}
          onChange={(e) => validatePhone(e)}
          className={inputStyle}
          placeholder="Телефон"
          required
        />

        <label className={labelStyle}>{!isCityValid ? "Въведете валиден Град" : ""}</label>
        <input
          required
          name="city"
          value={userData.city}
          onChange={(e) => validateCity(e)}
          className={inputStyle}
          placeholder="Град"
        />

        <label className={labelStyle}>{!isAreaValid ? "Въведете валиден окръг" : ""}</label>
        <input
          required
          value={userData.area}
          onChange={e => validateArea(e)}
          name="area"
          className={inputStyle}
          placeholder="Област"
        />
        <button
          name="pickUp"
          disabled={!clickable}
          type="submit"
          onClick={handleDelivery}
          className="rounded-lg py-2 px-6 my-5 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white w-[90%] sm:w-[40%]"
        >
          Доставка на адрес
        </button>

      </div>
    </div>
  );
};
