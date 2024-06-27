import Image from "next/image";
import logo from "../../public/Logo.png";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaRegCircleDot,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const FooterSectionTow = () => {
  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
            <div className="space-y-7">
              <div className="">
                <Image src={logo} alt="Logo" />
              </div>
              <p className="">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
              <div className="grid grid-cols-4">
                <FaFacebookF className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                <FaInstagram className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                <FaTwitter className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                <FaLinkedinIn className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="text-2xl font-semibold">Useful Links</div>
              <ul className="space-y-3">
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Home
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  About Us
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Services
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Blogs
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Contact
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <div className="text-2xl font-semibold">Our Servicers</div>
              <ul className="space-y-3">
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  UI/UX Design
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Graphics Design
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Web Developer
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Mobile App
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaRegCircleDot className="text-[#FF9301]" />
                  </span>
                  Outsourcing
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <div className="text-2xl font-semibold">Contact Information </div>
              <ul className="space-y-3">
                <li className="flex gap-4 items-center">
                  <span>
                    <FaPhone className="text-[#FF9301]" />
                  </span>
                  +99 0123 456 0470
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <IoIosMail className="text-[#FF9301]" />
                  </span>
                  createuiuxlab@gmail.com
                </li>
                <li className="flex gap-4 items-center">
                  <span>
                    <FaLocationDot className="text-[#FF9301]" />
                  </span>
                  22 Baker Street, London, United Kingdom,W1U 3BW
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSectionTow;
