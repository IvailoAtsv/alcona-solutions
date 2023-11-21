import { useEffect, useRef, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import emailjs from "@emailjs/browser";
import uniqid from "uniqid";

export const UserForm = ({
  cartItems,
  userData,
  setUserData,
  empty,
  total,
  setOrderStatus,
  delivery,
}) => {
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

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(null);
  const [isNameValid, setIsNameValid] = useState(null);
  const [isCityValid, setIsCityValid] = useState(null);
  const [isAreaValid, setIsAreaValid] = useState(null);
  const [clickable, setClickable] = useState(false);
  const [puClickable, setPuClickable] = useState(false)
  const [orderId, setOrderId] = useState(`OOOO${uniqid()}`);

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
    setName(nameRef.current.area);
    if (nameRef.current.value.length < 4) {
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
    const templateId = "template_tu0zsgt";
    let id = `OOOO${uniqid()}`;
    let data = { ...cartItems, ...userData, orderId: orderId };

    let result = cartItems
      .map((item) =>
        Object.entries(item)
          .map(([key, value]) => `${key} - ${value}`)
          .join(", \n "),
      )
      .join("\n \n ");

    result.concat(total);

    let formattedUserData = Object.entries(userData)
      .map(([key, value]) => `${key} - ${value}`)
      .join(", \n");

    result = result.concat(
      `\n \n \n user info: \n ${formattedUserData} \n \n Oбщо: ${total}`,
    );

    result = {
      name: userData.name,
      result: result,
    };

    try {
      await emailjs.send(serviceId, templateId, result);
      alert("Успешно изпратена поръчка! Нашият екип ще се свърже с вас!");
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
      updateFields({ pickUp: true });
      updateFields({ id: orderId });
      handleSend();
      setStatus("sent");
      setTimeout(() => {
        setOrderStatus("cart");
        setStatus("");
      }, 2000);
      empty();
    }
  };

  const handleDelivery = () => {
    validateAll();
    if (isAllValid()) {
      updateFields({ pickUp: false });
      updateFields({ id: orderId });
      handleSend();
      setStatus("sent");
      setTimeout(() => {
        setOrderStatus("cart");
        setStatus("");
      }, 2000);
      empty();
    }
  };

  useEffect(() => {
    if ((isEmailValid &&
      isPhoneValid &&
      isNameValid &&
      isCityValid &&
      isAreaValid)) {
      setClickable(true);
    } else {
      setClickable(false)
    }
    if (isPhoneValid &&
      isNameValid) {

      setPuClickable(true)
    } else {
      setPuClickable(false)
    }
    console.log(clickable, puClickable);
  }, [name, phone, email, area, city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("info");
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
      {status === "info" && (
        <>
          <h1 className="text-3xl mb-10 font-semibold border-b-4 pb-1 px-4 border-background">
            Данни за Поръчка
          </h1>
          <div className="flex flex-col w-full h-full justify-evenly items-center">
            {/* <p>Доставка до адрес (доплащане )</p> */}
            <div className="flex flex-col w-[90%] justify-evenly max-w-[500px] rounded-md bg-gray-100 items-center">
              <label className={!isNameValid && isNameValid !== null ? labelErrorStyle : labelStyle}>
                {!isNameValid && isNameValid !== null ? "Въведете валидно име" : "* Име: "}
              </label>
              <input
                ref={nameRef}
                required
                value={name}
                name="name"
                onChange={(e) => validateName(e)}
                className={inputStyle}
              />

              <label className={!isPhoneValid && isPhoneValid !== null ? labelErrorStyle : labelStyle}>
                {!isPhoneValid && isPhoneValid !== null ? "Въведете валиден телефон" : "* Телефон: "}
              </label>
              <input
                ref={phoneRef}
                required
                name="phone"
                value={phone}
                onChange={(e) => validatePhone(e)}
                className={inputStyle}
              />

              <button
                name="pickUp"
                type="submit"
                onClick={handlePickup}
                disabled={!puClickable}
                className="rounded-lg py-[4px] my-4 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white w-[90%] max-w-[400px] sm:w-[80%]"
              >
                Взимане от склад
              </button>
            </div>
            <p className="py-2">Или</p>
            <div className="flex rounded-md max-w-[500px] bg-gray-100 flex-col w-[90%] justify-evenly items-center">
              <label className={!isEmailValid && isEmailValid !== null ? labelErrorStyle : labelStyle}>
                {!isEmailValid && isEmailValid !== null ? "Въведете валиден e-mail" : "* e-mail: "}
              </label>
              <input
                ref={emailRef}
                value={email}
                name="email"
                onChange={(e) => validateEmail(e)}
                className={inputStyle}
              />

              <label className={!isCityValid && isCityValid !== null ? labelErrorStyle : labelStyle}>
                {!isCityValid && isCityValid !== null ? "Въведете валиден град" : "* Град: "}
              </label>
              <input
                ref={cityRef}
                name="city"
                value={city}
                onChange={(e) => validateCity(e)}
                className={inputStyle}
              />

              <label className={!isAreaValid && isAreaValid !== null ? labelErrorStyle : labelStyle}>
                {!isAreaValid && isAreaValid !== null ? "Въведете валиден окръг" : "* Окръг: "}
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
                Доставка на адрес ~{delivery}лв.
              </button>
            </div>
          </div>
        </>
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
      {status === "sent" && (
        <div className="flex flex-col h-auto w-[90%] gap-4 justify-evenly max-w-[500px] pt-4 pb-6 rounded-md bg-gray-100 items-center">
          <h1 className="font-semibold text-3xl">Успешно изпратена поръчка</h1>
          <p className="text-lg">
            нашият екип ще се свърже с вас за потвърждение
          </p>
          <p className="text-lg">номер на поръчка: {orderId}</p>
        </div>
      )}
    </div>
  );
};