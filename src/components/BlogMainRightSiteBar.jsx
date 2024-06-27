import HeroSection from "./HeroSection";
import SiteBar from "./SiteBar";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { BlogDataTow } from "@/utils/BlogDataTow";
import BlogCardTow from "./BlogCardTow";

const BlogMainRightSiteBar = () => {
  return (
    <>
      <HeroSection title="Blog" pageName="Blog" />
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 place-content-center">
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-6 pt-16">
                {BlogDataTow.slice(0, 4).map((val) => (
                  <BlogCardTow key={val.id} {...val} />
                ))}
              </div>
              <div className="py-10 flex justify-center">
                <ul className="flex justify-center items-center gap-3">
                  <FaCircleChevronLeft className="w-8 h-8 text-[#FF9301]" />

                  <li className="rounded-full px-3 py-1 border border-[#FF9301]">
                    1
                  </li>
                  <li className="rounded-full px-3 py-1 border border-[#FF9301]">
                    2
                  </li>
                  <li className="rounded-full px-3 py-1 border border-[#FF9301]">
                    3
                  </li>
                  <li className="rounded-full px-3 py-1 border border-[#FF9301]">
                    4
                  </li>
                  <FaCircleChevronRight className="w-8 h-8 text-[#FF9301]" />
                </ul>
              </div>
            </div>
            <div className="md:col-span-1 py-16">
              <SiteBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMainRightSiteBar;
