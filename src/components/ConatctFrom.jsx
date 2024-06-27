import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ConatctFrom = () => {
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
      <div className="bg-white rounded-xl px-4">
        <div className="text-[28px] font-semibold py-4">Send Your Message</div>
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
          <div className="pb-6">
            <button
              type="submit"
              className="bg-[#FF9301] py-3 px-6 rounded-full text-base text-white"
            >
              Send Messages
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConatctFrom;
