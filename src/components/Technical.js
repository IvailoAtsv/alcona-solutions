export const Technical = () => {
  return (
    <div
      id="technical"
      className="w-full min-h-[80vh] mt-3 flex-col flex gap-3 p-1 justify-evenly bg-left bg-fixed items-center bg-pen bg-no-repeat bg-cover"
    >
      <h1 className="bg-cardBg4 my-3 w-[90%] max-w-[1400px] text-center text-white p-4 backdrop-blur-md rounded-lg font-bold text-3xl">
        Teхнически характеристики
      </h1>
      <div className="w-[90%] bg-cardBg4 px-4 py-2 backdrop-blur-md rounded-md h-full max-w-[1400px] justify-center items-center gap-2">
        <InfoPair
          main="Тип:"
          description="Оградно пано от дървесно-полимерен композит"
        />
        <InfoPair main="Височина:" description="Между 0.60 и 2.00 метра" />
        <InfoPair
          main="Основна дължина:"
          description="1.86 метра / Реална дължина: 1.86
          метра"
        />
        <InfoPair
          main="Сечение на хоризонталните елементи:"
          description="160 x 20 мм, правоъгълно"
        />
        <InfoPair
          main="Сечение на стълбовете:"
          description="100 х 100 мм, квадратно"
        />
        <InfoPair
          main="Декоративни елементи на системата:"
          description="Завършващи релси и алуминиеви
          лайстни"
        />
        <InfoPair
          main="Основни Цветове:"
          description="Светло кафяво, Клен, Кестеняво кафяво, Пясъчно кафяво,
          Тъмно кафяво, Черно/Антрацит"
        />
        <InfoPair
          main="Премиум Цветове:"
          description="Тиик, Светло сиво, Розово дърво, Зелено"
        />
      </div>
    </div>
  );
};

const InfoPair = ({ main, description }) => {
  return (
    <div className="flex bg-cardBg22 my-3 px-2 py-3 flex-col sm:flex-row rounded-lg text-white font-semibold">
      <p className="mr-auto sm:max-w-[40%]">{main}</p>
      <p className="ml-auto sm:max-w-[55%]">{description}</p>
    </div>
  );
};
