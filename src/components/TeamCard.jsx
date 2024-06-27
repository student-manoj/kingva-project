import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const TeamCard = ({ img, name, profession }) => {
  return (
    <>
      <div className="group">
        <div className="relative overflow-hidden cursor-pointer flex justify-center">
          <Image
            src={img}
            alt="image"
            className="2xl:w-[355px] 2xl:h-[352px] xl:w-[312px] xl:h-[300px] lg:w-[280px] md:w-[400px] w-[500px]"
          />
          <div className="absolute inset-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/60 group-hover:bg-black/50 rounded-full overflow-hidden" />
          <div className="absolute group-hover:duration-500 inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all">
            <div className="text-lg font-semibold text-white">
              <div className="flex gap-3">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          <h2 className="text-[28px] font-semibold group-hover:text-[#FF9301]">
            {name}
          </h2>
          <p>{profession}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
