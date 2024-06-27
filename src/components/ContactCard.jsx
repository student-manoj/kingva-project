import Image from "next/image";

const ContactCard = ({ title, img, contact }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-tr-[50px] rounded-bl-[50px] bg-white">
        <h2 className="text-2xl py-5 font-semibold">{title}</h2>
        <div className="">
          <Image src={img} alt="" />
        </div>
        <p className="text-center font-semibold py-5">{contact}</p>
      </div>
    </>
  );
};

export default ContactCard;
