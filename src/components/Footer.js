/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiPhoneCall } from "react-icons/fi";
import logo from "../images/fullLogo.webp";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export function FooterWithSitemap({ setShowPrivacy }) {
  const handleAboutScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer
      id="footer"
      className="border-2 border-footer bg-footer w-full flex"
    >
      <div className="mx-auto w-full max-w-[1400px] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center justify-center">
              <img src={logo} className="h-24 m-3 " alt="Logo" />
            </a>
          </div>
          <div className="flex justify-start items-center w-[60%] min-h-min gap-6 md:flex-row flex-col">
            <div className="w-full">
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Контакти
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="flex items-center justify-start gap-1 w-auto">
                    <FiPhoneCall size={16} />
                    <a
                      target="_blank"
                      href="tel:0893993129"
                      className="text-md font-bold"
                      rel="noreferrer"
                    >
                      0893993141
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-start gap-1 w-auto">
                    <AiOutlineMail size={16} />
                    <p className="text-md font-bold">
                      office@alconasolutions.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase dark:text-white">
                Полезни линкове
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="hover:underline"
                  >
                    Сигурност и Политика
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAboutScroll()}
                    className="hover:underline"
                  >
                    Инструкции
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 lg:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="lg:flex w-full lg:w-[80%] lg:items-center px-2 lg:justify-between">
          <span className="text-md text-gray-500 lg:text-center dark:text-gray-400">
            © 2023{" "}
            <a target="_blank" href="#" className="hover:underline">
              Alcona Solutions
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 gap-3 lg:justify-center items-center lg:mt-0">
            <a
              className="text-slate-300 hover:text-white"
              target="_blank"
              href="https://www.facebook.com/people/Luxury-Fences-WPC-%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B8/61553632407058/"
              rel="noreferrer"
            >
              <FaFacebook size={25} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/message/KCTBNDNXZZN2E1?autoload=1&app_absent=0"
              rel="noreferrer"
            >
              <FaWhatsapp
                size={28}
                className="text-slate-300 hover:text-white"
              />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@AlconaSolutions"
              rel="noreferrer"
            >
              <FaYoutube
                size={28}
                className="text-slate-300 hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
