import service from "../images/service.jpg";
import price from "../images/price.jpg";
import quality from "../images/quality.jpg";

export const About = () => {
  return (
    <div className="min-h-[75vh] w-full p-4 bg-no-repeat bg-cover bg-bottom bg-aboutBg flex flex-col justify-evenly items-center group py-4">
      <div className="flex max-w-[1400px] w-[85%] bg-cardBg2 text-white gap-3 flex-col justify-evenly rounded-md p-4 items-center">
        <h1 className="text-5xl font-bold">За нас</h1>
        <p className="z-10 text-2xl text-justify font-semibold p-3 rounded-md">
          Вашият надежден партньор за уникални огради от WPC. Нашата
          специализирана компания предлага пълни решения, включително
          проектиране, доставка и монтаж на висококачествени оградни системи от
          изключително издръжлив композитен материал. С усъвършенстван дизайн и
          висока функционалност, ние създаваме огради, които перфектно се
          вписват във вашия простор. Нашият екип от млади, амбициозни и
          талантливи професионалисти споделя обща страст към съвременния стил и
          високото качество. Можете да ни вярвате, че ще превърнем вашите идеи в
          реалност.
        </p>
      </div>
      <div className="max-w-[1400px] w-full gap-2 items-center py-4 justify-between sm:flex-row flex-col flex">
        <Card
          img={quality}
          title="Високо Качество"
          text="В нашата компания се гордеем с предлагането на градински огради, изработени от висококачествени материали. Нашето посвещение на качеството гарантира, че всяка ограда воплъщава издръжливост и естетическа привлекателност, като предлага перфектно съчетание от функционалност и елегантност за вашия външен пространство."
        />
        <Card
          img={service}
          title="Отлично обслужване"
          text="В нашата компания отдаваме приоритет на отличната клиентска поддръжка. Вярваме в предоставянето на безпроблемен опит от момента, в който изберете нашите градински огради. Нашето посветено екип е винаги на разположение, за да ви помогне с всякакви въпроси, гарантирайки, че вашите загрижености ще бъдат разгледани бързо и ефективно. Вашето удовлетворение е наш главен приоритет."
        />
        <Card
          img={price}
          title="Koнкурентни цени"
          text="В нашата компания разбираме стойността на вашата инвестиция. Затова предлагаме градински огради на конкурентни цени, без да компрометираме качеството. Нашата цел е да ви осигурим най-добрата стойност, като ви гарантираме здрави и визуално привлекателни огради за вашата градина, без да натоварваме вашия бюджет."
        />
      </div>
    </div>
  );
};

const Card = ({ img, title, text }) => {
  return (
    <div className="sm:w-[30%] w-[90%] flex flex-col justify-between min-h-[500px] rounded-md bg-cardBg2 text-white">
      <img
        src={img}
        className="w-full h-[200px] rounded-t-md object-cover object-center"
      />
      <div className="flex min-h-min flex-col justify-start gap-4 items-center p-4">
        <h1 className="text-center text-3xl font-semibold ">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

{
  /* <div className="w-[60%] z-1 h-[500px] group-hover:-skew-x-[25deg] relative top-[50%] left-[50%] bg-gradient-to-tr transition ease-in  duration-300 from-pink-400 to-purple-700"></div> */
}
