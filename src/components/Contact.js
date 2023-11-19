import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import emailjs from "@emailjs/browser";


export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isQuestionValid, setIsQuestionValid] = useState(true);

  const inputStyle =
    "border-2 px-9 py-2 sm:w-[60%] w-[90%] rounded-md text-black foucs:border-black focus:ring-0 focus:outline-black";

  const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const labelErrorStyle = "text-xl text-center mt-4 text-red-600 font-bold";
  const labelStyle = "text-xl text-center mt-4 font-semibold";

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

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
    if (e.target.value.length > 10) {
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
    emailjs.init("F49RmIVFknhwrAdOc");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_o1ry7ph";
    const templateId = "template_9cs7a4l";
    try {
      await emailjs.send(serviceId, templateId, data);
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const componentRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const slideAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-400px)',
    config: { tension: 100, friction: 20 },
    immediate: !isVisible,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <animated.div
      ref={componentRef}
      style={slideAnimation}
      id="contact"
      className="w-[90%] overflow-hidden h-[90vh] max-w-[1400px]  flex-col flex justify-center items-center"
    >
      <div className="w-[100%] rounded-t-md h-[15%] p-6 flex justify-center items-center bg-footer">
        <h1 className="text-2xl text-white font-semibold">
          Имате запитване? Свържете се с нас!
        </h1>
      </div>
      <form
        id="form"
        className="w-[100%] border-b-4 border-r-4 border-l-4 border-black bg-white rounded-b-md backdrop-blur-md justify-center items-center flex flex-col h-[60%]"
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
        <textarea
          className="border-2 px-9 py-2 h-[30%] sm:w-[60%] w-[90%] rounded-md text-black foucs:border-black focus:ring-0 focus:outline-black"
          required
          name="question"
          onChange={(e) => validateQuesiton(e)}
        ></textarea>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="w-[60%] rounded-lg py-2 my-4 px-6 border-2 self-center font-bold duration-500 border-black hover:bg-footer hover:text-white"
        >
          Изпращане
        </button>
      </form>
    </animated.div>
  );
};
