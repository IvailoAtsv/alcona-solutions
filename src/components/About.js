import installation from "../files/installation.pdf"
import price from "../images/price.jpg";
import quality from "../images/certificate.png";
import tools from '../images/tools.jpg'
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { saveAs } from "file-saver";

export const About = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div
      id="about"
      className="min-h-[75vh] w-full p-4 bg-no-repeat bg-fixed bg-cover bg-bottom bg-aboutBg flex flex-col justify-evenly items-center group py-4"
    >

      <div className="flex max-w-[1400px] backdrop-blur-md w-full bg-cardBg3 my-4 text-white gap-3 flex-col justify-evenly rounded-md p-4 items-center">

        <h1 className="text-5xl font-bold">За нас</h1>
        <p className="z-10 text-md sm:text-2xl text-start font-semibold p-3 rounded-md">
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
      <div className="max-w-[1400px] w-full gap-4 items-center py-4 justify-between sm:flex-row flex-col flex">

        <Card
          img={quality}
          title="Сертификати"
          text="Гаранция за най-високо качество. Нашите сертификати гарантират високо качество и издръжливост на нашите огради, установявайки стандарта за отличие."
        />
        <Card
          setExpanded={setExpanded}
          img={tools}
          title="Инструкции за монтаж"
          text=""
          link="https://youtu.be/UwAVl_azClQ"
          btn="install"
        />
        <Card
          img={price}
          title="Реализирани проекти"
          btn="gallery"
          text="Разгледайте невероятните резултати на нашите клиенти"
        />
      </div>

    </div>
  );
};

const downloadImage = () => {
  saveAs(installation, 'installation.pdf') // Put your image URL here.
}


const Card = ({ img, title, text, link, btn }) => {
  return (
    <div className="backdrop-blur-md sm:w-[30%] shadow-xl w-full flex flex-col justify-between min-h-[380px] rounded-md bg-cardBg2 text-white">
      <div className="h-[30%] max-h-[200px] w-full">
        <img
          loading="lazy"
          src={img}
          className="w-full h-[200px] rounded-t-md object-cover object-center"
        />
      </div>
      <div className="flex h-full min-h-[230px] flex-col justify-between gap-5 items-center p-6">
        <h1 className="text-center mb-auto text-3xl font-semibold ">{title}</h1>
        <p className="text-md text-start h-full">{text}</p>
        {btn == 'install' && <button onClick={() => downloadImage()} className="rounded-lg w-[98%] py-2 px-6 border-4 self-center text-xl font-bold duration-500 border-white hover:bg-white hover:text-black">Изтеглете инструкции</button>}
        {btn === 'gallery' && <button className="rounded-lg w-[98%] py-2 px-6 border-4 self-center text-xl font-bold duration-500 border-white hover:bg-white hover:text-black">Галерия</button>}
        {link && <a className="rounded-lg w-[98%] py-2 px-6 border-4 self-center text-xl font-bold duration-500 border-white hover:bg-white hover:text-black" href="https://youtu.be/UwAVl_azClQ">Видео с Инструкции за монтаж</a>}
      </div>
    </div>
  );
};

{
  /* <div className="w-[60%] z-1 h-[500px] group-hover:-skew-x-[25deg] relative top-[50%] left-[50%] bg-gradient-to-tr transition ease-in  duration-300 from-pink-400 to-purple-700"></div> */
}
