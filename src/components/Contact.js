import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
    "border-2 mb-2 p-3 w-full rounded-md foucs:border-gray-600 focus:ring-0 focus:outline-gray-600";

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const labelErrorStyle =
    " w-full text-lg text-left mt-4 text-red-600 font-bold";
  const labelStyle = "w-full text-lg text-left mt-4 font-semibold";

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
      className={`w-[90%] my-5 text-gray-600 h-min overflow-hidden ${
        sent ? "h-auto mb-10" : "min-h-[90vh]"
      } max-w-[1400px]  flex-col flex justify-center items-center`}
    >
      {sent ? (
        <h1 className="text-3xl text-gray-600 font-semibold">
          Благодарим за отделеното време! Вашето запитване беше изпратено
        </h1>
      ) : (
        <>
          <span className="w-[100%] p-4 max-w-[700px] rounded-t-lg bg-gray-600 min-h-[100px] text-2xl font-bold flex items-center text-white justify-center">
            Имате запитване? Свържете се с нас!
          </span>
          <form
            id="form"
            className=" w-[100%] p-4 sm:px-8 max-w-[700px] border-2 border-gray-600 bg-white rounded-b-md backdrop-blur-md justify-center items-center flex flex-col min-h-[60vh]"
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
              className="ml-auto rounded-lg px-6 py-3 self-center
            font-bold duration-500 cursor-pointer hover:bg-orange-500 bg-orange-400 text-white"
            >
              Изпращане
            </button>
          </form>
        </>
      )}
    </div>
  );
};
