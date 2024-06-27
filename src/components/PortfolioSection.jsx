import Image from "next/image";
import { Portfoliodata } from "@/utils/Portfoliodata";
import Heading from "./Heading";
import { useState } from "react";

const PortfolioSection = () => {
  const [items, setItems] = useState(Portfoliodata);

  const filterItem = (category) => {
    const updatadItem = Portfoliodata.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatadItem);
  };

  return (
    <>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="My Portfolio"
            titleName="Showcasing some of my best work"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />
          <div className="flex justify-center gap-6 pt-5 cursor-pointer">
            <button
              onClick={() => setItems(Portfoliodata)}
              className="hover:border-b-2 border-dashed border-[#FF9301] duration-300 h-6"
            >
              All
            </button>
            <button
              onClick={() => filterItem("design")}
              className="hover:border-b-2 border-dashed border-[#FF9301] duration-300 h-6"
            >
              Design
            </button>
            <button
              onClick={() => filterItem("branding")}
              className="hover:border-b-2 border-dashed border-[#FF9301] duration-300 h-6"
            >
              Branding
            </button>
            <button
              onClick={() => filterItem("Photos")}
              className="hover:border-b-2 border-dashed border-[#FF9301] duration-300 h-6"
            >
              Photos
            </button>
          </div>
          <div className="pt-10 grid lg:grid-cols-4 md:grid-cols-3 gap-7">
            {items.slice(0, 8).map((val) => (
              <div
                key={val.id}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="">
                  <Image
                    className="h-full w-full object-cover transition-transform rounded-lg"
                    src={val.img}
                    alt="img"
                    height={500}
                    width={500}
                    priority
                  />
                </div>
                <div className="absolute inset-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/60"></div>
                <div className="absolute group-hover:duration-500 inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[80%] group-hover:translate-y-0 transition-all ">
                  <div className="text-lg font-semibold text-white">
                    E-Learning App
                  </div>
                  <p className="text-sm text-white">Nona IOS App</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
