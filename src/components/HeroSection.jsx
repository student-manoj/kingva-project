import { GoDotFill } from "react-icons/go";
import Link from "next/link";
const HeroSection = (props) => {
  return (
    <>
      <div className="bg-[url('/heroSictionImg.png')] ">
        <div className="bg-black/50">
          <div className="flex flex-col justify-center items-center text-white py-[158px] ">
            <h2 className="text-5xl font-bold">{props.title}</h2>
            <ul className="flex gap-2 pt-8">
              <Link href="/">Home</Link>
              <GoDotFill className="text-[#FF9301]" />
              <li>{props.pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
