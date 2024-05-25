import { useEffect, useState } from "react";
import { CustomSize } from "./CustomSize";
import { FormWrapper } from "../FormWrapper";
import { DefaultSize } from "./DefaultSize";
import { Project } from "./Project";

export function DimentionsForm({ color, updateFields, isValid, setIsValid }) {
  const [type, setType] = useState("");

  const buttonStyle =
    "flex justify-between flex-col items-center h-min min-h-[20vh] lg:min-w-[20vh] min-w-[80%] rounded-lg p-3 text-xl font-bold border-2 font-bold duration-500 border-black hover:bg-black hover:text-white";

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
      <FormWrapper
        title={type === "" ? "Изберете вид пано" : "Изберете размер и брой"}
      >
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
          <div className="flex justify-center flex-col h-full lg:flex-row items-center w-full gap-4">
            <button
              onClick={() => setType("default")}
              className={`${buttonStyle} group`}
            >
              Стандартно пано{" "}
              <p className="group-hover:block group-hover:text-gray-200 font-light text-sm text-gray-600">
                186cmx186cm
              </p>
            </button>
            <button
              onClick={() => setType("custom")}
              className={`${buttonStyle} group`}
            >
              Пано по ваш избор{" "}
              <p className="group-hover:block group-hover:text-gray-200 font-light text-sm text-gray-600">
                размери вариращи
                <br /> от 86-186см ширина
                <br /> 62-201.5см височина
              </p>
            </button>
            <button
              onClick={() => setType("project")}
              className={`${buttonStyle} group`}
            >
              Проект от нас
              <p className="group-hover:block group-hover:text-gray-200 font-light text-sm text-gray-600">
                според периметъра
                <br /> на вашия двор
              </p>
            </button>
          </div>
        )}
      </FormWrapper>
    </>
  );
}
