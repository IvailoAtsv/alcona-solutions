import logo from '../images/logo.png'
import logoFull from '../images/fullLogo.png'

const Hero = () => {
    return (
        <div className="w-full text-center flex bg-no-repeat bg-right bg-cover justify-center items-center bg-hero h-screen sm:h-[70vh]">

            <div className='w-full sm:w-11/12 h-full sm:h-11/12 sm:flex-row flex flex-col-reverse md:justify-between justify-evenly items-center gap-4'>

                <div className="flex text-start sm:w-[40%] w-[90%] sm:max-w-[600px] py-3 h-[65%] sm:h-[90%] rounded-md items-start bg-cardBg flex-col justify-evenly">
                    <img className="w-24 ml-4" src={logo} />
                    <h1 className="text-2xl ml-4 font-bold">Вдъхновяващи решения за вашия дом и градина</h1>
                    <p className='ml-4'>Добре дошли в Alcona Solutions , вашата врата към изисканите парапети и огради от луксозен материал. Подобрете вашия екстериор с нашата премиум колекция.</p>
                    <button className="py-2 px-6 ml-4 font-bold self-end mr-3 mb-3 bg-orange-400 rounded-md">
                        Contact us</button>
                </div>
                <img src={logoFull} className='w-[40%] mt-12 sm:mt-0 sm:pb-0 sm:pr-0 md:max-w-[350px] max-h-[220px]' />
            </div>
        </div>
    )
}

export default Hero