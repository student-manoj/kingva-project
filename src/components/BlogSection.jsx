import { BlogData } from "@/utils/BlogData";
import BlogCard from "./BlogCard";
import Heading from "./Heading";

const BlogSection = () => {
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

          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-16">
            {BlogData.slice(0, 3).map((val) => (
              <BlogCard key={val.id} {...val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
