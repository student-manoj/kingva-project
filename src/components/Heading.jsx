const Heading = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="border-b underline decoration-[#FF9301]">
          {props.title}
        </div>
        <div className="font-bold text-3xl text-center">{props.titleName}</div>
        <p className="lg:w-[621px] text-center text-black/60">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default Heading;
