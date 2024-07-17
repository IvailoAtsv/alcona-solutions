import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import img from "../images/hero/8.webp";
export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isQuestionValid, setIsQuestionValid] = useState(true);
  const [sent, setSent] = useState(false);

  const inputStyle =
    "border-2 mb-2 max-w-[700px] p-3 w-full rounded-md foucs:border-gray-600 focus:ring-0 focus:outline-gray-600";

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const labelErrorStyle =
    " w-full  max-w-[700px] text-lg text-left mt-4 text-red-600 font-bold";
  const labelStyle =
    "w-full  max-w-[700px] text-lg text-left mt-4 font-semibold";

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const validatePhone = (e) => {
    setPhone(e.target.value);
    if (e.target.value.length < 10) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
      updateFields({ phone: e.target.value });
    }
  };

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (regEx.test(e.target.value)) {
      setIsEmailValid(true);
      updateFields({ email: e.target.value });
    } else {
      setIsEmailValid(false);
    }
  };

  const validateQuesiton = (e) => {
    setQuestion(e.target.value);
    if (e.target.value.length > 4) {
      setIsQuestionValid(true);
      updateFields({ question: e.target.value });
    } else {
      setIsQuestionValid(false);
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

  useEffect(() => {
    if (email !== "" && name !== "" && question !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [data]);

  useEffect(() => {
    const publicId = process.env.REACT_APP_KEY1;

    emailjs.init(publicId);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_KEY2;
    const templateId = process.env.REACT_APP_KEY3;
    try {
      await emailjs.send(serviceId, templateId, data);
      toast.success(
        "Успешно изпратено запитване! Нашият екип ще се свърже с вас!",
      );
    } catch (error) {
      toast.error(error);
    }
    setSent(true);
    setName("");
    setEmail("");
    setQuestion("");
  };

  return (
    <div
      id="contact"
      className={`w-full text-gray-600 h-auto min-h-[650px] flex-col flex justify-center items-center`}
    >
      {sent ? (
        <h1 className="text-3xl text-gray-600 font-semibold">
          Благодарим за отделеното време! Вашето запитване беше изпратено
        </h1>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[650px] w-full">
          <span className="w-full  p-4 bg-footer min-h-[100px] text-2xl font-bold flex items-center text-white justify-center">
            Имате запитване? Свържете се с нас!
          </span>
          <div className="flex  w-full items-center min-h-[600px] flex-col md:flex-row justify-center max-w-7xl">
            <img
              src={img}
              className="flex-1 h-full md:min-h-[450px] rounded-md object-cover max-h-[300px] md:max-h-[700px] w-[95%] my-2 mx-auto md:max-w-[50%]"
              alt="alcona fences"
            />
            <form
              id="form"
              className="max-w-[700px] w-full p-4 sm:px-8 bg-white backdrop-blur-md justify-center items-center flex flex-col min-h-min md:min-h-[600px]"
            >
              <label className={isNameValid ? labelStyle : labelErrorStyle}>
                * Име и Фамилия:{" "}
              </label>
              <input
                onChange={(e) => validateName(e)}
                className={inputStyle}
                required
                name="name"
              />
              <label className={isPhoneValid ? labelStyle : labelErrorStyle}>
                * Телефон:{" "}
              </label>
              <input
                onChange={(e) => validatePhone(e)}
                className={inputStyle}
                required
                name="phone"
              />
              <label className={isEmailValid ? labelStyle : labelErrorStyle}>
                * e-mail за връзка:{" "}
              </label>
              <input
                onChange={(e) => validateEmail(e)}
                className={inputStyle}
                required
                name="email"
              />
              <label className={isQuestionValid ? labelStyle : labelErrorStyle}>
                * Въпрос:
              </label>
              <input
                className={inputStyle}
                required
                name="question"
                onChange={(e) => validateQuesiton(e)}
              />
              <button
                onClick={handleSubmit}
                disabled={!isValid}
                className="ml-auto rounded-lg px-6 py-3
            font-bold duration-500 cursor-pointer hover:opacity-100 opacity-90 bg-footer text-white"
              >
                Изпращане
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
