import { useEffect, useRef, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import emailjs from "@emailjs/browser";
import uniqid from "uniqid";

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

  const [status, setStatus] = useState("");

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const areaRef = useRef();

  const buttonStyle =
    " sm:h-[15vw] sm:w-[30%] w-[80%] h-[60px] rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

  function updateFields(fields) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const validatePhone = () => {
    setPhone(phoneRef.current.value);
    if (phoneRef.current.value.length < 10) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
      updateFields({ phone: phoneRef.current.value });
    }
  };

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const validateEmail = () => {
    setEmail(emailRef.current.value);
    if (regEx.test(emailRef.current.value)) {
      setIsEmailValid(true);
      updateFields({ email: emailRef.current.value });
    } else {
      setIsEmailValid(false);
    }
  };

  const validateName = () => {
    setName(nameRef.current.value);
    if (nameRef.current.value.length < 3) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
      updateFields({ name: nameRef.current.value });
    }
  };
  const validateCity = () => {
    setCity(cityRef.current.value);
    if (cityRef.current.value.length < 4) {
      setIsCityValid(false);
    } else {
      setIsCityValid(true);
      updateFields({ city: cityRef.current.value });
    }
  };
  const validateArea = () => {
    setArea(areaRef.current.area);
    if (areaRef.current.value.length < 4) {
      setIsAreaValid(false);
    } else {
      setIsAreaValid(true);
      updateFields({ area: areaRef.current.value });
    }
  };

  useEffect(() => {
    emailjs.init("F49RmIVFknhwrAdOc");
  }, []);

  const handleSend = async (e) => {
    const serviceId = "service_o1ry7ph";
    const templateId = "template_9cs7a4l";
    let data = { cartItems, userData };
    try {
      await emailjs.send(serviceId, templateId, data);
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const validateAll = () => {
    validateName();
    validatePhone();
    validateEmail();
    validateCity();
    validateArea();
  };

  const isAllValid = () => {
    if (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isCityValid &&
      isAreaValid
    ) {
      return true;
    } else return false;
  };

  const handlePickup = (e) => {
    e.preventDefault();
    validateName();
    validatePhone();
    if (isNameValid && isEmailValid) {
      let id = `O${uniqid()}`;
      updateFields({ pickUp: true });
      updateFields({ id: id });
      // handleSend();
    }
  };

  const handleDelivery = () => {
    validateAll();
    if (isAllValid()) {
      updateFields({ pickUp: false });
      console.log(userData);
      console.log(cartItems);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("info");
  };

  const [eik, setEik] = useState("");
  const [mol, setMol] = useState("");
  const [adress, setAdress] = useState("");

  const validateEik = (e) => {
    if (1 > 0) {
    }
  };

  return (
    <div className="flex flex-col w-full py-0 min-h-[550px] h-11/12 justify-around  items-center">
      <>
        {status === "" && (
          <div className="flex justify-center flex-col gap-4 sm:flex-row items-center w-full">
            <button onClick={() => setStatus("firm")} className={buttonStyle}>
              Юридическо лице
            </button>
            <button onClick={() => setStatus("info")} className={buttonStyle}>
              Физическо лице
            </button>
          </div>
        )}
      </>
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
                ref={nameRef}
                value={name}
                name="name"
                onChange={(e) => validateName(e)}
                className={inputStyle}
              />

              <label className={isPhoneValid ? labelStyle : labelErrorStyle}>
                {!isPhoneValid ? "Въведете валиден телефон" : "* Телефон: "}
              </label>
              <input
                ref={phoneRef}
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
                ref={emailRef}
                value={email}
                name="email"
                onChange={(e) => validateEmail(e)}
                className={inputStyle}
              />

              <label className={isCityValid ? labelStyle : labelErrorStyle}>
                {!isCityValid ? "Въведете валиден град" : "* Град: "}
              </label>
              <input
                ref={cityRef}
                name="city"
                value={city}
                onChange={(e) => validateCity(e)}
                className={inputStyle}
              />

              <label className={isAreaValid ? labelStyle : labelErrorStyle}>
                {!isAreaValid ? "Въведете валиден окръг" : "* Окръг: "}
              </label>
              <input
                ref={areaRef}
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
      {status == "firm" && (
        <form>
          <h1 className="text-3xl font-semibold border-b-4 pb-1 mb-5 px-4 border-background">
            Данни за Юридическо лице
          </h1>

          <div className="flex flex-col h-auto w-[90%] justify-evenly max-w-[500px] pt-4 pb-6 rounded-md bg-gray-100 items-center">
            <label className={isEmailValid ? labelStyle : labelErrorStyle}>
              ЕИК (ПИК)
            </label>
            <input
              name="EIK"
              onChange={(e) => updateFields({ EIK: e.target.value })}
              required
              className={inputStyle}
            />
            <label className={isEmailValid ? labelStyle : labelErrorStyle}>
              МОЛ
            </label>
            <input
              name="email"
              onChange={(e) => updateFields({ MOL: e.target.value })}
              required
              className={inputStyle}
            />
            <label className={isEmailValid ? labelStyle : labelErrorStyle}>
              Адрес
            </label>
            <input
              name="adress"
              onChange={(e) => updateFields({ adress: e.target.value })}
              required
              className={inputStyle}
            />
            <button
              type="submit"
              className="sm:h-[50px] w-[80%] mt-8 h-[10px] rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Напред
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
