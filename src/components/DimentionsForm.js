import { useEffect, useState } from "react";
import { CustomSize } from "./DimentionForms/CustomSize";
import { FormWrapper } from "./FormWrapper";
import { DefaultSize } from "./DimentionForms/DefaultSize";
import { Project } from "./DimentionForms/Project";

export function DimentionsForm({ color, updateFields, isValid, setIsValid }) {
  const [type, setType] = useState("");

  const buttonStyle =
    "py-6 px-2 sm:h-[15vw] sm:w-[30%] w-[80%] font-bold mt-5 hover:bg-orange-300 bg-orange-400 rounded-md";

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
            <button
              onClick={() => setType((prev) => (prev = "default"))}
              className={buttonStyle}
            >
              Стандартно пано
            </button>
            <button
              onClick={() => setType((prev) => (prev = "custom"))}
              className={buttonStyle}
            >
              Пано по ваш избор
            </button>
            <button
              onClick={() => setType((prev) => (prev = "project"))}
              className={buttonStyle}
            >
              Проект от нас
            </button>
          </div>
        )}
      </FormWrapper>
    </>
  );
}
