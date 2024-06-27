import { BlogData } from "@/utils/BlogData";
import BlogCard from "./BlogCard";
import Heading from "./Heading";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
const BlogSectionTow = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] pt-16">
        <div className="container mx-auto px-4">
          <Heading
            title=" My Blog"
            titleName="Check out my latest blog posts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />

          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-10">
            {BlogData.slice(0, 9).map((val) => (
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
      </div>
    </>
  );
};

export default BlogSectionTow;
