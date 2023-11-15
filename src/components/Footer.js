import { FiPhoneCall } from "react-icons/fi";
import logo from "../images/fullLogo.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export function FooterWithSitemap() {
  const handleHeroScroll = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer id="footer" class="bg-white dark:bg-footer w-full flex">
      <div class="mx-auto w-full max-w-[1400px] p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center justify-center">
              <img src={logo} class="h-24 m-3 " alt="Logo" />
            </a>
          </div>
          <div class="flex justify-start items-center w-[60%] min-h-min gap-6 sm:flex-row flex-col">
            <div className="w-full">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Контакти
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <div className="flex items-center justify-start gap-1  w-auto">
                    <FiPhoneCall size={16} />
                    <a href="tel:0893993129" className="text-sm font-bold">
                      0893993129
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-start gap-1 w-auto">
                    <AiOutlineMail size={16} />
                    <p className="text-sm font-bold">
                      office@alconasolutions.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Полезни линкове
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <button
                    onClick={() => handleHeroScroll()}
                    class="hover:underline"
                  >
                    Начало
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAboutScroll()}
                    class="hover:underline"
                  >
                    Инструкции
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex w-full sm:w-[80%] sm:items-center px-2 sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Alcon Solution
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 gap-2 sm:justify-center sm:mt-0">
            <a
              className="text-slate-300 hover:text-white"
              href="https://www.facebook.com/people/Luxury-Fences-WPC-%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B8/61553632407058/"
            >
              <FaFacebook size={28} />
            </a>
            <a href="https://api.whatsapp.com/message/KCTBNDNXZZN2E1?autoload=1&app_absent=0">
              <FaWhatsapp
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
