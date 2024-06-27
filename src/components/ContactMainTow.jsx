import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Heading from "./Heading";
import HeroSection from "./HeroSection";
import { IoIosMail } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactMainTow = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6jxwwes", "template_u0mq6th", form.current, {
        publicKey: "cpYgjdwqPTj6sL8is",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <HeroSection title="Conatct" pageName="Contct" />
      <div className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-4">
          <Heading
            title="Contact Me"
            titleName="Get In Touch"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur fermentum sem vitae dolor porta, quis auctor velit
              varius."
          />
          <div className="pt-16">
            <div className="md:grid md:grid-cols-2 gap-6 border-2 border-[#FF9301] ">
              <div className="p-10">
                <h2 className="text-[28px] font-semibold">CONTACT INFO:</h2>
                <ul className=" flex flex-col gap-8 pt-6">
                  <li className="flex gap-4 items-center">
                    <span>
                      <FaPhone className="text-white bg-[#FF9301] p-3 rounded-full w-14 h-14" />
                    </span>
                    <ul>
                      <li className="flex flex-col text-lg font-medium">
                        Phone Number
                      </li>
                      <li className="lg:text-[28px] font-medium">
                        +99 0123 456 0470
                      </li>
                    </ul>
                  </li>
                  <li className="flex gap-4 items-center">
                    {" "}
                    <span>
                      <IoIosMail className="text-white bg-[#FF9301] p-3 rounded-full w-14 h-14" />
                    </span>
                    <ul>
                      <li className="flex flex-col text-lg font-medium">
                        Email
                      </li>
                      <li className="lg:text-[28px] font-medium">
                        createuiuxlab@gmail.com
                      </li>
                    </ul>
                  </li>
                  <li className="flex gap-4 items-center">
                    {" "}
                    <span>
                      <FaLocationDot className="text-white bg-[#FF9301] p-3 rounded-full w-14 h-14" />
                    </span>
                    <ul>
                      <li className="flex flex-col text-lg font-medium">
                        Location
                      </li>
                      <li className="lg:text-[28px] font-medium">
                        123 Stree New York City , America
                      </li>
                    </ul>
                  </li>
                  <li className="flex gap-4 items-center">
                    {" "}
                    <span>
                      <FaLocationDot className="text-white bg-[#FF9301] p-3 rounded-full w-14 h-14" />
                    </span>
                    <ul>
                      <li className="flex flex-col text-lg font-medium">
                        website
                      </li>
                      <li className="lg:text-[28px] font-medium">
                        www.createuiuxlab.com
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FF9301] py-7 px-5">
                <div className="text-[28px] font-semibold text-white">
                  Send Your Message
                </div>
                <div className="pt-6">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        required
                        name="user_name"
                        placeholder="Name :"
                        className="p-3 focus:outline-none border-2 rounded-lg"
                      />
                      <input
                        required
                        name="user_Phone"
                        placeholder="Phone :"
                        className="p-3 focus:outline-none border-2 rounded-lg"
                      />
                      <input
                        required
                        name="user_email"
                        placeholder="Email :"
                        className="p-3 focus:outline-none border-2 rounded-lg"
                      />
                      <input
                        required
                        name="user_Subject"
                        placeholder="Subject :"
                        className="p-3 focus:outline-none border-2 rounded-lg"
                      />
                    </div>
                    <div className="py-6">
                      <textarea
                        required
                        name="user_Messages"
                        placeholder="Messages :"
                        className="p-2 focus:outline-none border-2 w-full h-48 rounded-lg"
                      />
                    </div>
                    <div className="pb-6 text-center">
                      <button
                        type="submit"
                        className="bg-white py-3 px-6 rounded-full text-base text-[#FF9301] "
                      >
                        Send Messages
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMainTow;
