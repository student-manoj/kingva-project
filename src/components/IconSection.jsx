import { IconData } from "@/utils/IconData";
import Image from "next/image";

const IconSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] py-16">
        <div className="bg-[#FF9301]">
          <div className="container mx-auto px-4">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 py-20 place-items-center">
              {IconData.slice(0, 4).map((val) => (
                <Image key={val.id} src={val.img} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconSection;
