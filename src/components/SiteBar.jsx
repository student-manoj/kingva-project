import Image from "next/image";
import SiteBarImg from "../../public/SiteBarImg.png";
import { FaSearch } from "react-icons/fa";
import { SiteBarData } from "@/utils/SiteBarData";
import { VscCalendar } from "react-icons/vsc";
import { IoIosPlay } from "react-icons/io";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const SiteBar = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-6 text-center">
        <h4 className="bg-[#FF9301] py-2 rounded-full text-xl">Search</h4>

        <div className="relative">
          <input
            placeholder="Search...."
            className="border w-full border-[#FF9301] focus:outline-none rounded-full py-2 px-4"
          />
          <button className="">
            <FaSearch className="text-white absolute bg-[#FF9301] p-3 rounded-tr-full border border-[#FF9301] rounded-br-full bottom-0 right-0" />
          </button>
        </div>
        <h4 className="bg-[#FF9301] py-2 text-white rounded-full text-xl">
          About Me
        </h4>
        <div className="flex justify-center">
          <Image src={SiteBarImg} alt="Site Bar Img" />
        </div>
        <h3 className="text-[28px] font-semibold">Nairobi AFSARI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. quis auctor
          velit varius. Nam a vulputate ipsum, tempus feugiat lacus.
        </p>
        <h4 className="bg-[#FF9301] py-2 text-white rounded-full text-xl">
          Recent News
        </h4>
        {SiteBarData.slice(0, 4).map((val) => (
          <div key={val.id} className="flex flex-col gap-3">
            <div className="flex gap-4 justify-center items-center">
              <Image src={val.img} alt="" />
              <div className="">
                <h5 className="xl:text-lg text-start">{val.title}</h5>
                <ul className="flex items-center gap-2">
                  <VscCalendar className="h-4 w-4" />
                  <li className="text-sm">{val.date}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
        <h4 className="bg-[#FF9301] py-2 text-white rounded-full text-xl">
          Categories
        </h4>
        <div className="group">
          <div className="py-2 border group-hover:border-[#FF9301] rounded-full relative">
            <IoIosPlay className="w-5 h-5 absolute right-3 group-hover:text-[#FF9301]" />
            <div className="text-start pl-5 group-hover:text-[#FF9301]">
              Grapic Design
            </div>
          </div>
        </div>
        <div className="group">
          <div className="py-2 border group-hover:border-[#FF9301] rounded-full relative">
            <IoIosPlay className="w-5 h-5 absolute right-3 group-hover:text-[#FF9301]" />
            <div className="text-start pl-5 group-hover:text-[#FF9301]">
              Ui Ux Design
            </div>
          </div>
        </div>
        <div className="group">
          <div className="py-2 border group-hover:border-[#FF9301] rounded-full relative">
            <IoIosPlay className="w-5 h-5 absolute right-3 group-hover:text-[#FF9301]" />
            <div className="text-start pl-5 group-hover:text-[#FF9301]">
              Grapic Design
            </div>
          </div>
        </div>
        <div className="group">
          <div className="py-2 border group-hover:border-[#FF9301] rounded-full relative">
            <IoIosPlay className="w-5 h-5 absolute right-3 group-hover:text-[#FF9301]" />
            <div className="text-start pl-5 group-hover:text-[#FF9301]">
              Grapic Design
            </div>
          </div>
        </div>
        <div className="group">
          <div className="py-2 border group-hover:border-[#FF9301] rounded-full relative">
            <IoIosPlay className="w-5 h-5 absolute right-3 group-hover:text-[#FF9301]" />
            <div className="text-start pl-5 group-hover:text-[#FF9301]">
              Grapic Design
            </div>
          </div>
        </div>
        <h4 className="bg-[#FF9301] py-2 text-white rounded-full text-xl">
          All Tags
        </h4>
        <ul className="flex gap-3 flex-wrap justify-center">
          <li className=" border-2 px-3 py-1 rounded-full">Design</li>
          <li className=" border-2 px-3 py-1 rounded-full">Business</li>
          <li className=" border-2 px-3 py-1 rounded-full">UI/Ux</li>
          <li className=" border-2 px-3 py-1 rounded-full">Web Templates</li>
          <li className=" border-2 px-3 py-1 rounded-full">Marketing</li>
          <li className=" border-2 px-3 py-1 rounded-full">Ux Design</li>
          <li className=" border-2 px-3 py-1 rounded-full">Devlope</li>
          <li className=" border-2 px-3 py-1 rounded-full">Mobile App</li>
        </ul>
        <h4 className="bg-[#FF9301] py-2 text-white rounded-full text-xl">
          Share
        </h4>

        <div className="flex gap-4 justify-center">
          <FaFacebookF className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
          <FaInstagram className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
          <FaTwitter className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
          <FaLinkedinIn className="text-[#FF9301] border-2 p-3 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
        </div>
      </div>
    </>
  );
};

export default SiteBar;
