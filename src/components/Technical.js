export const Technical = () => {
  return (
    <div
      id="technical"
      className="w-full min-h-[80vh] my-3 flex-col flex gap-3 justify-center bg-center bg-fixed items-center bg-pen bg-no-repeat bg-cover"
    >
      <h1 className="bg-cardBg4 my-3 text-white p-4 backdrop-blur-md rounded-lg font-bold text-3xl">
        Teхнически характеристики
      </h1>
      <div className="w-[90%] bg-cardBg4 px-4 py-2 backdrop-blur-md rounded-md h-full max-w-[1400px] justify-center items-center gap-2">
        <InfoPair
          main="Тип:"
          description="Оградно пано от дървесно-полимерен композит"
        />
        <InfoPair main="Височина:" description="Между 1.20 и 1.80 метра" />
        <InfoPair
          main="Основна дължина:"
          description="1.80 метра / Реална дължина (основа): 1.745
          метра"
        />
        <InfoPair
          main="Сечение на хоризонталните елементи:"
          description="150 x 20 мм, правоъгълно"
        />
        <InfoPair
          main="Сечение на стълбовете:"
          description="90 х 90 мм, квадратно"
        />
        <InfoPair
          main="Декоративни елементи на системата:"
          description="Завършващи релси и алуминиеви
          лайстни"
        />
        <InfoPair
          main="Основни Цветове:"
          description="Розово дърво, Клен, Кестеняво кафяво, Пясъчно кафяво,
          Тъмно кафяво, Черно/Антрацит"
        />
        <InfoPair
          main="Премиум Цветове:"
          description="Тиик, Светло сиво, Светло кафяво, Зелено"
        />
      </div>
    </div>
  );
};

const InfoPair = ({ main, description }) => {
  return (
    <div className="flex bg-cardBg22 my-2 p-2 rounded-lg text-white font-semibold">
      <p className="mr-auto max-w-[40%]">{main}</p>
      <p className="ml-auto max-w-[55%]">{description}</p>
    </div>
  );
};
