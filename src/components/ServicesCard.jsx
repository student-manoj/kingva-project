import Image from "next/image";

const ServicesCard = ({ img, title, description }) => {
  return (
    <>
      <div className="group">
        <div className="flex flex-col duration-300 justify-center items-center group group-hover:bg-[#FF9301] bg-white p-12 rounded-tr-[50px] rounded-bl-[50px]">
          <div className="bg-white p-5 rounded-full border-2 border-[#FF9301]">
            <Image src={img} alt="" />
          </div>
          <h2 className="text-2xl group-hover:text-white py-5 font-semibold">
            {title}
          </h2>
          <p className="group-hover:text-white text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
