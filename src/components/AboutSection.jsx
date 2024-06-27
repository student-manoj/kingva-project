import Image from "next/image";
import Image2 from "../../public/Image1.png";

const AboutSection = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-center items-center gap-20">
          <div className="py-[100px] flex justify-center">
            <Image
              src={Image2}
              width={550}
              height={600}
              priority={true}
              alt=""
            />
          </div>
          <div className="2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center -mt-12 xl:w-[620px] lg:w-[560px]">
            <div className="space-y-5">
              <div className="">ABOUT ME</div>
              <div className="text-2xl font-bold">
                Creative{" "}
                <span className="text-[#FF9301]">Ui & Ux Designer</span> Based
                In, World
              </div>
              <p className="text-black/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur fermentum sem vitae dolor porta, quis auctor velit
                varius. Nam a vulputate ipsum, tempus feugiat lacus.
              </p>

              <div className="font-bold">PERSONAL INFO</div>
            </div>
            <div className="flex flex-col 2xl:justify-start xl:justify-start lg:justify-start justify-center gap-10 2xl:items-start xl:items-start lg:items-start items-center py-3">
              <div className="md:flex gap-14 justify-start">
                <div className="text-start">
                  <div className="text-black/60">
                    Name :
                    <span className="font-bold text-black">ADDRICA JOHAN</span>
                  </div>
                  <div className="text-black/60">
                    Age : <span className="font-bold text-black">21 Years</span>
                  </div>
                  <div className="text-black/60">
                    Nationality :{" "}
                    <span className="font-bold text-black">USA</span>
                  </div>
                  <div className="text-black/60">
                    Freelance :{" "}
                    <span className="font-bold text-black">Available</span>
                  </div>
                </div>
                <div className="text-start">
                  <div className="text-black/60">
                    Address :{" "}
                    <span className="font-bold text-black">
                      Hf,29 - Path3UKS
                    </span>
                  </div>
                  <div className="text-black/60">
                    Phone :{" "}
                    <span className="font-bold text-black">+16 993 456 67</span>
                  </div>
                  <div className="text-black/60">
                    Email :{" "}
                    <span className="font-bold text-black">
                      yourmail@gmail.com
                    </span>
                  </div>
                  <div className="text-black/60">
                    Languages :{" "}
                    <span className="font-bold text-black">English</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <a href="(Name)CV.pdf" download>
                <button className="border-2 border-[#FF9301] text-[#FF9301] px-4 py-2 rounded-lg">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
