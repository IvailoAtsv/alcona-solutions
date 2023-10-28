

const Hero = () => {
    return (
        <div className="w-full object-cover text-center flex justify-start align-center bg-slate-400 h-[450px] ">
            <div className="flex w-[350px] h-[400px] rounded-md items-center bg-white my-8 mx-8 p-2 gap-4 flex-col justify-evenly">
                <h1 className="text-3xl font-bold">Вдъхновяващи решения за вашия дом и градина</h1>
                <p>Добре дошли в Alcona Solutions , вашата врата към изисканите парапети и огради от луксозен комозитен материал. Подобрете вашия екстериор с нашата премиум колекция </p>
                <button className="py-2 px-6 bg-orange-300 rounded-md">Contact us</button>
            </div>
        </div>
    )
}

export default Hero