import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineUser } from "react-icons/hi2";
import { VscCalendar } from "react-icons/vsc";

const BlogCardTow = ({ date, img, name, title, description }) => {
  return (
    <>
      <div className="bg-[#FAFAFA] p-7 rounded-xl group">
        <div className="p-6 absolute">
          <div className="flex items-center gap-1 text-white px-3 py-1 bg-[#FF9301] rounded-md">
            <span>
              <VscCalendar className="h-4 w-4" />
            </span>
            {date}
          </div>
        </div>
        <Image src={img} alt="" className="w-full" />
        <div className="">
          <p className="flex gap-2 py-6 text-xs">
            <span>
              <HiOutlineUser className="w-3 h-4 group-hover:text-[#FF9301]" />
            </span>
            By Admin :{" "}
            <span className="group-hover:text-[#FF9301]">{name}</span>
          </p>
        </div>
        <h3 className="text-3xl font-semibold group-hover:text-[#FF9301]">
          {title}
        </h3>
        <p className="py-5 text-base">{description}</p>
        <Link href="/blogPageSiteBar">
          <button className="text-sm text-[#FF9301] border-2 border-[#FF9301] px-6 py-2 rounded-full flex items-center justify-center group-hover:text-white group-hover:bg-[#FF9301]">
            Read More
            <span>
              <HiOutlineArrowRight className="text-xl pt-1 group-hover:text-white" />
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogCardTow;
