export const Contact = () => {
  const inputStyle =
    "border-2 px-9 py-2 sm:w-[60%] w-[90%] rounded-md text-black foucs:border-background focus:ring-0 focus:outline-background";

  return (
    <div id="contact" className="w-[95%] overflow-hidden h-[80vh] max-w-[1400px]  flex-col flex justify-center items-center">
      <div className="w-[100%] rounded-t-md h-[20%] p-6 flex justify-center items-center bg-background">
        <h1 className="text-2xl text-white font-semibold">
          Имате запитване? Свържете се с нас!
        </h1>
      </div>
      <form className=" w-[100%] border-b-4 border-r-4 border-l-4 border-background bg-white rounded-b-md backdrop-blur-md justify-center items-center flex flex-col h-[60%]">
        <label>Име и Фамилия: </label>
        <input className={inputStyle} required name="name" />
        <label>e-mail за връзка: </label>
        <input className={inputStyle} required name="name" />
        <label>Въпрос: </label>
        <textarea className="border-2 px-9 py-2 h-[30%] sm:w-[60%] w-[90%] rounded-md text-black foucs:border-background focus:ring-0 focus:outline-background"></textarea>
        <input
          className="rounded-lg py-1 mt-4 px-6 border-2 self-center font-bold duration-500 border-background hover:bg-background hover:text-white"
          type="submit"
        ></input>
      </form>
    </div>
  );
};
