import Image from "next/image";
import logo from "../../public/Logo.png";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpenTow, setDropDownOpenTow] = useState(false);

  const mEnter = () => {
    setDropDownOpen(true);
  };
  const mEnterTow = () => {
    setDropDownOpenTow(true);
  };
  const mLeave = () => {
    setDropDownOpen(false);
  };
  const mLeaveTow = () => {
    setDropDownOpenTow(false);
  };
  const router = useRouter();

  return (
    <>
      <header>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="z-30">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <nav className="hidden md:flex gap-4 text-lg">
              <ul className="flex justify-center items-center gap-6">
                <li>
                  <Link
                    href="/"
                    className={` ${
                      router.pathname === `/`
                        ? `border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer`
                        : `text-black`
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutPage"
                    className={` ${
                      router.pathname === `/aboutPage`
                        ? `border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer`
                        : `text-black`
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolioPage"
                    className={` ${
                      router.pathname === `/portfolioPage`
                        ? `border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer`
                        : `text-black`
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ServicesPage"
                    className={` ${
                      router.pathname === `/ServicesPage`
                        ? `border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer`
                        : `text-black`
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <div className="">
                    <div
                      className="hover-dropdown"
                      onMouseEnter={mEnter}
                      onMouseLeave={mLeave}
                    >
                      <div className="flex gap-1 items-center group">
                        <Link
                          href={"/blogPage"}
                          className={` ${
                            router.pathname === `/blogPage`
                              ? `text-[#FF9301] `
                              : `text-black`
                          }`}
                        >
                          Blog
                        </Link>
                        <span
                          className={` ${
                            router.pathname === `/blogPage`
                              ? `text-[#FF9301] group-hover:rotate-180 duration-300`
                              : `text-black`
                          }`}
                        >
                          <IoMdArrowDropdown className="text-xl" />
                        </span>
                      </div>
                      {dropDownOpen && (
                        <>
                          <div className="flex flex-col gap-4 absolute p-4 border backdrop-blur text-[#FF9301] bg-white">
                            <Link
                              href={"/blogPageSiteBar"}
                              className={` ${
                                router.pathname === `/blogPageSiteBar`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Blog Site Bar
                            </Link>
                            <Link
                              href={"/blogPageRightSiteBar"}
                              className={` ${
                                router.pathname === `/blogPageRightSiteBar`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Blog Right SiteBar
                            </Link>
                            <Link
                              href={"/blogPagLeftSiteBar"}
                              className={` ${
                                router.pathname === `/blogPagLeftSiteBar`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Blog Left Site Bar
                            </Link>
                            <Link
                              href={"/blogSinglePage"}
                              className={` ${
                                router.pathname === `/blogSinglePage`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Blog Single
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                    <div className=""></div>
                  </div>
                </li>
                <li>
                  <div className="">
                    <div
                      className="hover-dropdown"
                      onMouseEnter={mEnterTow}
                      onMouseLeave={mLeaveTow}
                    >
                      <div className="flex gap-1 items-center group">
                        <Link
                          href={"/contactPage"}
                          className={` ${
                            router.pathname === `/contactPage`
                              ? `text-[#FF9301] `
                              : `text-black`
                          }`}
                        >
                          Contact
                        </Link>
                        <span
                          className={` ${
                            router.pathname === `/blogPage`
                              ? `text-[#FF9301] group-hover:rotate-180 duration-300`
                              : `text-black`
                          }`}
                        >
                          <IoMdArrowDropdown className="text-xl" />
                        </span>
                      </div>
                      {dropDownOpenTow && (
                        <>
                          <div className="flex flex-col gap-4 absolute p-4 border backdrop-blur text-[#FF9301] bg-white">
                            <Link
                              href={"/contactPageTow"}
                              className={` ${
                                router.pathname === `/contactPageTow`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Contact Tow
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                    <div className=""></div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Mobile nav start*/}
            <nav
              onClick={() => setNav(!nav)}
              className="cursor-pointer z-50 md:hidden duration-500"
            >
              {nav ? (
                <AiOutlineClose className="w-8 h-8" />
              ) : (
                <AiOutlineMenu className="w-8 h-8 " />
              )}
            </nav>
            {nav && (
              <div
                onClick={() => setNav(false)}
                className="flex flex-col py-14 px-10 absolute top-5 right-0 text-center w-full h-full backdrop-blur-xl"
              >
                <ul className="flex flex-col gap-5">
                  <li>
                    <Link
                      href="/"
                      className="hover:border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aboutPage"
                      className="hover:border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolioPage"
                      className="hover:border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ServicesPage"
                      className="hover:border-b border-dashed border-[#FF9301] hover:text-[#FF9301] duration-300 cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <div className="">
                      <div
                        className="hover-dropdown"
                        onMouseEnter={mEnter}
                        onMouseLeave={mLeave}
                      >
                        <div className="flex justify-center gap-1 items-center group">
                          <Link
                            href={"/blogPage"}
                            className={` ${
                              router.pathname === `/blogPage`
                                ? `text-[#FF9301] `
                                : `text-black`
                            }`}
                          >
                            Blog
                          </Link>
                          <span
                            className={` ${
                              router.pathname === `/blogPage`
                                ? `text-[#FF9301] group-hover:rotate-180 duration-300`
                                : `text-black`
                            }`}
                          >
                            <IoMdArrowDropdown className="text-xl" />
                          </span>
                        </div>
                        {dropDownOpen && (
                          <>
                            <div
                              onClick={() => setDropDownOpen(false)}
                              className="flex flex-col gap-4 p-4 border backdrop-blur text-[#FF9301] bg-white"
                            >
                              <Link
                                href={"/blogPageSiteBar"}
                                className={` ${
                                  router.pathname === `/blogPageSiteBar`
                                    ? `text-[#FF9301] `
                                    : `text-black`
                                }`}
                              >
                                Blog Site Bar
                              </Link>
                              <Link
                                href={"/blogPageRightSiteBar"}
                                className={` ${
                                  router.pathname === `/blogPageRightSiteBar`
                                    ? `text-[#FF9301] `
                                    : `text-black`
                                }`}
                              >
                                Blog Right SiteBar
                              </Link>
                              <Link
                                href={"/blogPagLeftSiteBar"}
                                className={` ${
                                  router.pathname === `/blogPagLeftSiteBar`
                                    ? `text-[#FF9301] `
                                    : `text-black`
                                }`}
                              >
                                Blog Left Site Bar
                              </Link>
                              <Link
                                href={"/blogSinglePage"}
                                className={` ${
                                  router.pathname === `/blogSinglePage`
                                    ? `text-[#FF9301] `
                                    : `text-black`
                                }`}
                              >
                                Blog Single
                              </Link>
                            </div>
                          </>
                        )}
                      </div>
                      <div className=""></div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="hover-dropdown"
                      onMouseEnter={mEnterTow}
                      onMouseLeave={mLeaveTow}
                    >
                      <div className="flex gap-1 justify-center items-center group">
                        <Link
                          href={"/blogPage"}
                          className={` ${
                            router.pathname === `/contactPage`
                              ? `text-[#FF9301] `
                              : `text-black`
                          }`}
                        >
                          Contact
                        </Link>
                        <span
                          className={` ${
                            router.pathname === `/contactPage`
                              ? `text-[#FF9301] group-hover:rotate-180 duration-300`
                              : `text-black`
                          }`}
                        >
                          <IoMdArrowDropdown className="text-xl" />
                        </span>
                      </div>
                      {dropDownOpenTow && (
                        <>
                          <div
                            onClick={() => setDropDownOpenTow(false)}
                            className="flex flex-col gap-4 p-4 border backdrop-blur text-[#FF9301] bg-white"
                          >
                            <Link
                              href={"/contactPageTow"}
                              className={` ${
                                router.pathname === `/contactPageTow`
                                  ? `text-[#FF9301] `
                                  : `text-black`
                              }`}
                            >
                              Contact Tow
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {/* Mobile nav end */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
