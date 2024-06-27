import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const Planscard = ({ title, icon, description, amount }) => {
  return (
    <>
      <div className="border-2 border-[#FF9301] rounded-xl p-8 flex flex-col group relative">
        <div className="">
          <Image
            src={icon}
            alt=""
            className="text-[#FF9301] absolute right-8"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <h2 className="text-[28px] font-semibold group-hover:text-[#FF9301]">
            {title}
          </h2>

          <p className="text-center">{description}</p>
          <div className="text-2xl font-bold text-white bg-[#FF9301] py-1 px-24">
            {amount}
            <span className="text-sm">Per Month</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-9">
          <div className="space-y-4">
            <ul className="flex gap-3">
              <BsCheckCircleFill className="text-[#FF9301]" />
              <li>Graphic Design</li>
            </ul>
            <ul className="flex gap-3">
              <BsCheckCircleFill className="text-[#FF9301]" />
              <li>Mobile App Design</li>
            </ul>
            <ul className="flex gap-3">
              <BsCheckCircleFill className="text-[#FF9301]" />
              <li>Web Design</li>
            </ul>
            <ul className="flex gap-3">
              <BsCheckCircleFill className="text-[#FF9301]" />
              <li>Responsive Design</li>
            </ul>
            <ul className="flex gap-3">
              <BsCheckCircleFill className="text-[#FF9301]" />
              <li>Hotline Supports 24/7</li>
            </ul>
          </div>
          <div className="pt-8">
            <button className="border-2 border-[#FF9301]  group-hover:bg-[#FF9301] py-3 px-7 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planscard;
