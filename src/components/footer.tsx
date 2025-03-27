import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: { name: string; href: string }[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: [
      { name: "Home", href: "/" },
      { name: "Agency", href: "https://dev-champions.tech/" }, // Updated Blog link
      { name: "Jobs", href: "https://dev-champions.tech/jobs" },
      { name: "Contact", href: "https://api.whatsapp.com/send/?phone=+2349115034504&text=Feel%20free%20to%20email%20us%20at%20info%40dev-champions.tech%20too" },
    ],
  },
  {
    id: 2,
    section: "Category",
    link: [
      { name: "Design", href: "/" },
      { name: "Mockup", href: "/" },
      { name: "View all", href: "/" },
      { name: "Log In", href: "/login" },
    ],
  },
  {
    id: 3,
    section: "Pages",
    link: [
      { name: "404", href: "/" },
      { name: "Instructions", href: "/" },
      { name: "License", href: "/" },
      { name: "Meeting", href: "/" },
    ],
  },
  {
    id: 4,
    section: "Others",
    link: [
      { name: "Styleguide", href: "/" },
      { name: "Changelog", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-black  z-20" id="first-section">
      <div className="mx-auto max-w-2xl pt-40 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center leading-9 mb-4 lg:mb-20">
                <Image
                  src="/images/logo/logo_web_white.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-18 h-18"
                  unoptimized
                />
                <h3 className="text-white text-3xl font-semibold leading-9 mx-4">
                  DEV BLOGS
                </h3>
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com/DevChampions">
                  <Image
                    src="/images/footer/vec.svg"
                    alt="facebook"
                    width={15}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://wa.me/2349115034504">
                  <Image
                    src="/images/footer/whatsapp.svg"
                    alt="whatsapp"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.linkedin.com/in/promise-champion-a0020656/">
                  <Image
                    src="/images/footer/linkedin.svg"
                    alt="linkedin"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
            </div>

            <div className="mt-8 text-white">
              <p>
                Email:{" "}
                <a href="mailto:info@dev-champions.tech" className="underline">
                  info@dev-champions.tech
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+2349115034504" className="underline">
                  +234 9115 034 504
                </a>
              </p>
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((item, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"} // Open external links in new tab
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-white text-lg">
                Dev Champions IT &copy; 2024 - All Rights Reserved
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-white pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-white pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


