import Image from "next/image";
import Image1 from "../../public/Image.png";

const HomeHeroSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="lg:flex justify-center items-center gap-20">
            <div className="py-[100px] flex justify-center">
              <Image src={Image1} alt="" />
            </div>

            <div className="space-y-2 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center -mt-12">
              <div className="">Hi There!</div>
              <div className="text-3xl font-bold">
                I’M <span className="text-[#FF9301]">ADDRICA JOHAN</span>{" "}
              </div>
              <div className="text-2xl font-medium">UI & UX DESIGNER</div>
              <p className="xl:w-[620px] lg:w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur fermentum sem vitae dolor porta, quis auctor velit
                varius. Nam a vulputate ipsum, tempus feugiat lacus{" "}
              </p>
              <button className="bg-[#FF9301] text-white px-4 py-2 rounded-lg">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;
