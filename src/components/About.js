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
        <p className="z-10 text-sm sm:text-lg text-start font-semibold p-3 rounded-md">
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
      <div className="max-w-[1400px] w-full gap-4 items-start py-4 justify-between sm:flex-row flex-col flex">

        <Card
          img={quality}
          title="Сертификати"
          text="Гаранция за най-високо качество. Нашите сертификати гарантират високо качество и издръжливост до 20 години."
          more="20 Години Ограничена Гаранция WPC (Дървесно-пластмасов композит) Продукти

          Изключения:
          Тази гаранция не се отнася до никакви продукти които са :       
          - повредени от форсмажорни събития, актове на война
          - повредени поради транспортен инцидент или неизправност
          - не са инсталирани в съответствие с предоставените инструкции за монтаж, местните строителни кодекси, правила и регламенти на общността с ограничен достъп
          - са били използвани, модифицирани или обработвани по начин, не предвиден от Производителя
          - нормално износване и стареене, което не засяга употребата на продуктите, като малка разлика в цвета, избледняване, малки напуквания и кривене, причинени от продължителна употреба
          
          Неспазването или непослушание на ограниченията, предоставени с продукта или несъответствие с местните строителни кодекси, правила и регламенти на общността с ограничен достъп, ще направи гаранцията невалидна и без допълнително действие. Производителят запазва правото си да проверява материалите, да разследва всички искове, при които е било направено такова иска. Всички строежи, използващи продуктите от WPC, трябва да бъдат в съответствие с всички местни зонингови и/или строителни кодекси. За получаване на възстановяване или замяна, оригиналният собственик трябва да представи искането си с оригиналната фактура за закупуване, посочваща датата на закупуване, снимки на дефектните продукти и подробно описание на събието."
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
          title="Предимствата на WPC огради:"
          text="Разгледайте невероятните резултати на нашите клиенти"
          more="- Изключителна устойчивост - крайният продукт, изработен от WPC материали, е свободен от деформации и пукнатини. Този устойчив материал е водоустойчив, не загнива и не позволява образуването на плесени.
          - Ниско поддръжание - повърхността на WPC материалите не изисква боядисване, мазане с масло или лакиране. Дори когато са изложени на влага и UV-лъчение от околната среда, те не изискват специална грижа.
          - Дълъг живот - WPC материалите могат да издържат до 10 години, осигурявайки здравина и надеждност на вашата оградна система.
          - Комплектите включват всичко необходимо за лесен монтаж. Предлагаме разнообразие от цветове, за да задоволим вашите вкусове и предпочитания.
          
          Вашият избор за WPC оградна система е готов да донесе не само изящество и устойчивост, но и сигурност и безопасност във вашия дом или обект."
        />
      </div>

    </div>
  );
};

const downloadImage = () => {
  saveAs(installation, 'installation.pdf') // Put your image URL here.
}


const Card = ({ img, title, text, link, btn, more }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className="backdrop-blur-md sm:w-[30%] shadow-xl w-full flex flex-col justify-between min-h-[520px]  rounded-md bg-cardBg2 text-white">
      <div className="h-[30%] max-h-[200px] w-full">
        <img
          loading="lazy"
          src={img}
          className="w-full  h-[200px] rounded-t-md object-cover bg-center"
        />
      </div>
      <div className="flex h-full min-h-[230px] flex-col justify-between gap-5 items-center p-6">
        <h1 className="text-center mb-auto text-3xl font-semibold ">{title}</h1>
        <p className="text-md text-start h-full">{text} </p>
        {readMore && <p>{more}</p>}
        {more && <button className="self-end underline text-lg" onClick={() => setReadMore(prev => prev = !prev)}>{!readMore ? 'прочетете още' : 'Прочетете по-малко'}</button>}

        {btn == 'install' && <button onClick={() => downloadImage()} className="rounded-lg w-[98%] py-2 px-6 border-4 self-center text-md font-bold duration-500 border-white hover:bg-white hover:text-black">Изтеглете инструкции</button>}
        {btn === 'gallery' && <button className="rounded-lg w-[98%] mt-4 py-2 px-6 border-4 self-center text-md font-bold duration-500 border-white hover:bg-white hover:text-black">Галерия</button>}
        {link && <a className="rounded-lg w-[98%] py-2 px-6 border-4 self-center text-md font-bold duration-500 border-white hover:bg-white text-center hover:text-black" href="https://youtu.be/UwAVl_azClQ">Видео с Инструкции за монтаж</a>}
      </div>
    </div>
  );
};

