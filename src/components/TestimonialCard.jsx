import Image from "next/image";

const TestimonialCard = ({ img, title, rImagr, profetion, description }) => {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center bg-[#FAFAFA] p-12 rounded-tr-[50px] rounded-bl-[50px]">
          <Image src={img} alt="testmonial img" />

          <h2 className="text-2xl pt-12 font-medium">{title}</h2>
          <p className="pt-4">{profetion}</p>
          <Image src={rImagr} alt="testmonial img rating" className="pt-7" />
          <p className="pt-6 text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
