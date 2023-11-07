import { useEffect, useState } from "react";
import { CustomSize } from "./DimentionForms/CustomSize";
import { FormWrapper } from "./FormWrapper";
import { DefaultSize } from "./DimentionForms/DefaultSize";
import { Project } from "./DimentionForms/Project";

export function DimentionsForm({ color, updateFields, isValid, setIsValid }) {
  const [type, setType] = useState("");

  const buttonStyle =
    " sm:h-[15vw] sm:w-[30%] w-[80%] rounded-lg py-2 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

  useEffect(() => {
    if (type === "") {
      setIsValid(false);
    }
  }, []);
  useEffect(() => {
    if (type !== "") {
      setIsValid(true);
    }
  }, [type]);

  return (
    <>
      <FormWrapper title="Изберете размер и брой">
        {type === "default" && (
          <DefaultSize
            updateFields={updateFields}
            isValid={isValid}
            setIsValid={setIsValid}
            color={color}
          />
        )}
        {type === "custom" && (
          <CustomSize
            updateFields={updateFields}
            isValid={isValid}
            setIsValid={setIsValid}
            color={color}
          />
        )}
        {type === "project" && (
          <Project
            updateFields={updateFields}
            isValid={isValid}
            setIsValid={setIsValid}
            color={color}
          />
        )}
        {type === "" && (
          <div className="flex justify-center flex-col sm:flex-row items-center w-full gap-4">
            <button onClick={() => setType("default")} className={buttonStyle}>
              Стандартно пано
            </button>
            <button onClick={() => setType("custom")} className={buttonStyle}>
              Пано по ваш избор
            </button>
            <button onClick={() => setType("project")} className={buttonStyle}>
              Проект от нас
            </button>
          </div>
        )}
      </FormWrapper>
    </>
  );
}
