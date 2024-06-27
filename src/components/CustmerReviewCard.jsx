import Image from "next/image";

const CustmerReviewCard = ({ title, img, reviewpoint }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 p-12 rounded-tr-[50px] rounded-bl-[50px] border-[#FF9301] text-white">
        <h2 className="text-2xl py-5 font-semibold ">{title}</h2>
        <div className="p-5">
          <Image src={img} alt="" />
        </div>
        <p className="text-center text-3xl font-semibold">{reviewpoint}</p>
      </div>
    </>
  );
};

export default CustmerReviewCard;
