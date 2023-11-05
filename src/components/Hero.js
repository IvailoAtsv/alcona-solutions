import logo from "../images/logo.png";
import logoFull from "../images/fullLogo.png";

const Hero = () => {
    return (
        <div className="w-full text-center flex bg-no-repeat bg-right-bottom sm:mt-0 mt-10 bg-fixed bg-cover justify-center items-center bg-hero3 h-[85vh]">
            <div id="hero" className="w-full  max-w-[1400px] sm:w-[90%] h-full sm:h-11/12 sm:flex-row flex flex-col md:justify-between justify-evenly items-center gap-4">
                <div className="flex backdrop-blur-md min-w-[250px] text-start sm:w-[30%] w-[90%] sm:max-w-[450px] h-[60%] rounded-xl items-start p-2 bg-cardBg flex-col justify-evenly">
                    <img className="w-24 ml-4" src={logo} />
                    <h1 className="text-2xl ml-4 font-bold">
                        Вдъхновяващи решения за вашия дом и градина
                    </h1>
                    <p className="ml-4">
                        Добре дошли в Alcona Solutions , вашата врата към изисканите
                        парапети и огради от луксозен материал. Подобрете вашия екстериор с
                        нашата премиум колекция.
                    </p>
                    <button className="py-2 px-6 font-bold self-end mr-5 bg-orange-400 rounded-md">
                        Contact us
                    </button>
                </div>
                <img
                    src={logoFull}
                    className="sm:w-[50%] w-[90%] mt-12 sm:mt-0 sm:pb-0 sm:pr-0 md:max-w-[450px] max-h-[250px]"
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default Hero;
