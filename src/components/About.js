import { PiCubeTransparent } from "react-icons/pi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
import installation from "../files/installation.pdf";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import certificates from "../images/certificate.webp";

export const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-[50px] min-h-[60vh] w-full flex flex-col justify-evenly items-center group py-4"
    >
      <div className="flex max-w-7xl w-[95%] gap-3 flex-col justify-evenly rounded-md py-4 items-center">
        <h2 className="text-4xl text-gray-600 font-bold text-center mx-auto underline decoration-orange-400">
          Защо Alcona Solutions ?
        </h2>
        <p className="text-md p-1 md:p-5 text-gray-500 md:text-lg text-justify max-w-7xl w-[100%] rounded-md">
          Ние сме Вашият надежден партньор за уникални огради от WPC. Нашата
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
      <div className="max-w-7xl w-[100%] md:w-[90%] items-start my-4 justify-between md:flex-row flex-col flex">
        <Card
          img={
            <PiCubeTransparent className="mx-auto text-orange-400" size={80} />
          }
          title="3D проектиране"
          text="Ние от Alcona Solutions ще проектираме дизайна на Вашата бъдеща ограда напълно БЕЗПЛАТНО. Свържете се с нас за да научите повече. В замяна ще получите 3D проект спрямо Вашите изисквания за ограда и съществуващият имот."
          link={"#gallery"}
        />

        <Card
          img={
            <AiOutlineSafetyCertificate
              className="mx-auto text-orange-400"
              size={80}
            />
          }
          title="Сертификати"
          text="Гаранция за най-високо качество. Нашите сертификати гарантират високо качество и издръжливост до 20 години."
          more={
            <div className="mt-3">
              <img src={certificates} alt="сертификати на Алкона Солюшънс" />
              <p>
                "20 Години Ограничена Гаранция WPC (Дървесно-пластмасов
                композит) Продукти Изключения: Тази гаранция не се отнася до
                никакви продукти които са :- повредени от форсмажорни събития,
                актове на война - повредени поради транспортен инцидент или
                неизправност - не са инсталирани в съответствие с предоставените
                инструкции за монтаж, местните строителни кодекси, правила и
                регламенти на общността с ограничен достъп - са били използвани,
                модифицирани или обработвани по начин, не предвиден от
                Производителя - нормално износване и стареене, което не засяга
                употребата на продуктите, като малка разлика в цвета,
                избледняване, малки напуквания и кривене, причинени от
                продължителна употреба. Неспазването или непослушание на
                ограниченията, предоставени с продукта или несъответствие с
                местните строителни кодекси, правила и регламенти на общността с
                ограничен достъп, ще направи гаранцията невалидна и без
                допълнително действие. Производителят запазва правото си да
                проверява материалите, да разследва всички искове, при които е
                било направено такова иска. Всички строежи, използващи
                продуктите от WPC, трябва да бъдат в съответствие с всички
                местни зонингови и/или строителни кодекси. За получаване на
                възстановяване или замяна, оригиналният собственик трябва да
                представи искането си с оригиналната фактура за закупуване,
                посочваща датата на закупуване, снимки на дефектните продукти и
                подробно описание на събието.
              </p>
            </div>
          }
        />
        <Card
          img={
            <FaHandHoldingHeart className="mx-auto text-orange-400" size={80} />
          }
          title="Предимства"
          text="Изключителна устойчивост - крайният продукт, изработен от WPC материали, не загнива и не позволява образуването на плесени."
          more="
          - Ниско поддръжание - повърхността на WPC материалите не изисква боядисване, мазане с масло или лакиране. Дори когато са изложени на влага и UV-лъчение от околната среда, те не изискват специална грижа.
          - Дълъг живот - WPC материалите могат да издържат до 10 години, осигурявайки здравина и надеждност на вашата оградна система.
          - Комплектите включват всичко необходимо за лесен монтаж. Предлагаме разнообразие от цветове, за да задоволим вашите вкусове и предпочитания.
          
          Вашият избор за WPC оградна система е готов да донесе не само изящество и устойчивост, но и сигурност и безопасност във вашия дом или обект."
        />
        {/* <Card
          img={<BsTools className="mx-auto text-orange-400" size={80} />}
          title="Инструкции за монтаж"
          text=""
          link="https://youtu.be/UwAVl_azClQ"
          btn="install"
        /> */}
      </div>
    </div>
  );
};

export const downloadImage = () => {
  saveAs(installation, "installation.pdf");
};

const Card = ({ img, title, text, link, btn, more }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="px-1 flex-1 gap-2 text-justify w-full flex flex-col justify-between min-h-[350px]">
      {img}
      <div className="flex h-full min-h-[230px] gap-2 flex-col justify-between items-center">
        <h1 className="text-gray-600 text-center my-3 text-2xl font-semibold ">
          {title}
        </h1>
        <p className="text-md text-gray-600 font-light text-justify px-4 mt-4 w-[95%] h-full">
          {text}{" "}
        </p>
        {readMore && (
          <p className="px-4 w-[95%] font-light text-gray-600">{more}</p>
        )}
        {more && (
          <button
            className="self-end mr-6 mt-2 hover:text-orange-400 transition duration-500 text-gray-500 underline decoration-orange-400 text-lg"
            onClick={() => setReadMore((prev) => (prev = !prev))}
          >
            {!readMore ? "прочетете още" : "Прочетете по-малко"}
          </button>
        )}

        {btn === "install" && (
          <button
            onClick={() => downloadImage()}
            className="rounded-lg mx-auto w-[90%] py-3 px-6 border-2 self-center text-md font-bold duration-500 border-orange-400 hover:bg-orange-400 hover:text-white"
          >
            Изтеглете Инструкции (pdf)
          </button>
        )}
        {/* {btn === "gallery" && (
          <button className="rounded-lg w-[98%] mt-4 py-2 px-6 border-2 self-center text-md font-bold duration-500 border-orange-400 hover:bg-orange-400 hover:text-white">
            Галерия
          </button>
        )} */}
        {link && (
          <a
            href="#gallery"
            className="self-end mr-6 mt-2 hover:text-orange-400 transition duration-500 text-gray-500 underline decoration-orange-400 text-lg"
          >
            научете повече
          </a>
        )}
      </div>
    </div>
  );
};
