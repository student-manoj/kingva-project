import FooterSectionone from "./FooterSectionOne";
import FooterSectionTow from "./FooterSectionTow";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="bg-[#FF9301] pt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center space-y-4 pb-16">
              <div className="underline decoration-black">Subscribe</div>
              <div className="font-bold text-3xl text-center">
                Subscribe To Newsletters
              </div>
              <p className="lg:w-[621px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur fermentum sem vitae dolor porta, quis auctor velit
                varius.
              </p>
              <FooterSectionone />
            </div>
          </div>
        </div>
        <FooterSectionTow />
      </div>
      <div className="bg-[#131313]">
        <div className="text-white text-base md:flex justify-center gap-1 py-4">
          Copyright © 2024 - All Rights Reserved. Made by
          <span className="text-[#FF9301]">Createuiuxlab</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
