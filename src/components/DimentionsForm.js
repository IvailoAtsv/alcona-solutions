import { useEffect, useState } from "react";
import { CustomSize } from "./DimentionForms/CustomSize";
import { FormWrapper } from "./FormWrapper";
import { DefaultSize } from "./DimentionForms/DefaultSize";
import { Project } from "./DimentionForms/Project";

export function DimentionsForm({ color, updateFields, isValid, setIsValid }) {
  const [type, setType] = useState("");

  const buttonStyle =
    " h-[20vh] w-[20vh] rounded-lg py-6 px-6 border-4 self-center font-bold duration-500 border-black hover:bg-black hover:text-white";

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
          <div className="flex justify-center flex-col h-full sm:flex-row items-center w-full gap-4">
            <button
              onClick={() => setType("default")}
              className={`${buttonStyle} group`}
            >
              Стандартно пано{" "}
              <p className="sm:hidden group-hover:block">186cmx186cm</p>
            </button>
            <button
              onClick={() => setType("custom")}
              className={`${buttonStyle} group`}
            >
              Пано по ваш избор{" "}
              <p className="sm:hidden group-hover:block">
                c размери вариращи от 86-186см ширина и 62-201.5см височина
              </p>
            </button>
            <button
              onClick={() => setType("project")}
              className={`${buttonStyle} group`}
            >
              Проект от нас
              <p className="sm:hidden group-hover:block">
                според периметъра на вашия двор
              </p>
            </button>
          </div>
        )}
      </FormWrapper>
    </>
  );
}
