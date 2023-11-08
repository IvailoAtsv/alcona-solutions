import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Products", "Gallery"],
  },
  {
    title: "Help Center",
    links: ["Email", "Twitter", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSitemap() {
  return (
    <footer className="relative bg-background text-white w-full">
      <div id="footer" className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}
