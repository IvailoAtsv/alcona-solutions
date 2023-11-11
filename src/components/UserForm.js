import { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";

export const UserForm = ({ cartItems, userData, setUserData }) => {
  const inputStyle =
    "border-2 px-9 py-[4px] sm:w-[80%] max-w-[400px] w-[90%] rounded-md text-black foucs:border-background focus:ring-0 focus:outline-background";

  const labelErrorStyle = "text-md text-center mt-4 text-red-600 font-bold";
  const labelStyle = "text-md text-center mt-4 font-semibold";

  // const initial = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   city: '',
  //   area: '',
  //   pickUp: false,
  // }
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);
  const [isAreaValid, setIsAreaValid] = useState(true);
  const [clickable, setClickable] = useState(false);

  const [status, setStatus] = useState("info");

  function updateFields(fields) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const validatePhone = (e) => {
    setPhone(e.target.value);
    if (e.target.value && e.target.value.length < 10) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
      updateFields({ phone: e.target.value });
    }
  };

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (regEx.test(e.target.value)) {
      setIsEmailValid(true);
      updateFields({ email: e.target.value });
    } else {
      setIsEmailValid(false);
    }
  };

  const validateName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
      updateFields({ name: e.target.value });
    }
  };
  const validateCity = (e) => {
    setCity(e.target.value);
    if (e.target.value.length < 4) {
      setIsCityValid(false);
    } else {
      setIsCityValid(true);
      updateFields({ city: e.target.value });
    }
  };
  const validateArea = (e) => {
    setArea(e.target.area);
    if (e.target.value.length < 4) {
      setIsAreaValid(false);
    } else {
      setIsAreaValid(true);
      updateFields({ area: e.target.value });
    }
  };

  const handlePickup = (e) => {
    if (isNameValid && isPhoneValid && userData.name && userData.phone) {
      updateFields({ pickUp: true });
    } else {
      setIsNameValid(false);
      setIsPhoneValid(false);
    }
  };

  const handleDelivery = () => {
    if (
      userData.name &&
      userData.phone &&
      userData.email &&
      userData.city &&
      userData.area
    ) {
      updateFields({ pickUp: false });
      console.log(userData);
      console.log(cartItems);
    } else {
      setIsNameValid(false);
      setIsPhoneValid(false);
      setIsEmailValid(false)
      setIsCityValid(false)
      setIsAreaValid(false)
    }
  };

  useEffect(() => {
    if (
      isEmailValid &&
      isPhoneValid &&
      isNameValid &&
      isCityValid &&
      isAreaValid
    ) {
      setClickable(true);
    } else {
      setClickable(false);
    }
  }, [userData]);
  return (
    <div className="flex flex-col w-full py-0 sm:min-h-[450px] h-11/12 justify-around  items-center">
      {status === "info" ? (
        <>
          <h1 className="text-3xl mb-10 font-semibold border-b-4 pb-1 px-4 border-background">
            Данни за Поръчка
          </h1>
          <div className="flex flex-col w-full h-full justify-evenly items-center">
            {/* <p>Доставка до адрес (доплащане )</p> */}
            <div className="flex flex-col w-[90%] justify-evenly max-w-[500px] rounded-md bg-gray-100 items-center">
              <label className={isNameValid ? labelStyle : labelErrorStyle}>
                {!isNameValid ? "Въведете валидно име" : "* Име: "}
              </label>
              <input
                value={name}
                name="name"
                onChange={(e) => validateName(e)}
                className={inputStyle}
              />

              <label className={isPhoneValid ? labelStyle : labelErrorStyle}>
                {!isPhoneValid ? "Въведете валиден телефон" : "* Телефон: "}
              </label>
              <input
                name="phone"
                value={phone}
                onChange={(e) => validatePhone(e)}
                className={inputStyle}
              />

              <button
                name="pickUp"
                type="submit"
                onClick={handlePickup}
                className="rounded-lg py-[4px] my-4 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white w-[90%] max-w-[400px] sm:w-[80%]"
              >
                Взимане от склад
              </button>
            </div>
            <p className="py-2">Или</p>
            <div className="flex rounded-md max-w-[500px] bg-gray-100 flex-col w-[90%] justify-evenly items-center">
              <label className={isEmailValid ? labelStyle : labelErrorStyle}>
                {!isEmailValid ? "Въведете валиден e-mail" : "* e-mail: "}
              </label>
              <input
                value={email}
                name="email"
                onChange={(e) => validateEmail(e)}
                className={inputStyle}
              />

              <label className={isCityValid ? labelStyle : labelErrorStyle}>
                {!isCityValid ? "Въведете валиден град" : "* Град: "}
              </label>
              <input
                name="city"
                value={city}
                onChange={(e) => validateCity(e)}
                className={inputStyle}
              />

              <label className={isAreaValid ? labelStyle : labelErrorStyle}>
                {!isAreaValid ? "Въведете валиден окръг" : "* Окръг: "}
              </label>
              <input
                value={area}
                onChange={(e) => validateArea(e)}
                name="area"
                className={inputStyle}
              />
              <button
                name="pickUp"
                disabled={!clickable}
                type="submit"
                onClick={handleDelivery}
                className="rounded-lg py-[4px] px-6 my-5 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white w-[90%] max-w-[400px] sm:w-[80%]"
              >
                Доставка на адрес
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
