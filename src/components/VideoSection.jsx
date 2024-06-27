import Image from "next/image";
import videoButtonImage from "../../public/videoButton.png";
import { useState } from "react";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="asUN0c94xnY"
        onClose={() => setOpen(false)}
      />

      <div className="py-16 bg-[url('/videoSectionimg.png')] h-[400px]">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col justify-center items-center h-[280px]">
            <Image
              onClick={() => setOpen(true)}
              src={videoButtonImage}
              alt="Video button img"
            />
            <h2 className="text-white text-4xl font-bold text-center">
              Design Studio That Gets <br /> Excited About Us.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
