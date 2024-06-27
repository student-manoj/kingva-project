import { BlogData } from "@/utils/BlogData";
import HeroSection from "./HeroSection";
import BlogCard from "./BlogCard";
import { FaSearch } from "react-icons/fa";
import SiteBar from "./SiteBar";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const BlogMainSiteBar = () => {
  return (
    <>
      <HeroSection title="Blog" pageName="Blog" />
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 place-content-center">
            <div className="md:col-span-2">
              <div className="lg:grid md:grid-cols-2 pt-10">
                {BlogData.slice(0, 6).map((val) => (
                  <BlogCard key={val.id} {...val} />
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
            <div className="md:col-span-1 py-10">
              <SiteBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMainSiteBar;
