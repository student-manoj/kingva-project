import { VscCalendar } from "react-icons/vsc";
import HeroSection from "./HeroSection";
import SiteBar from "./SiteBar";
import Image from "next/image";
import blogSingleimg from "../../public/blogSingleimg.png";
import blogSingleimg1 from "../../public/blogSingleimg1.png";
import blogSingleimg2 from "../../public/blogSingleimg2.png";
import blogCommentsing from "../../public/blogCommentsing.png";
import blogCommentsing1 from "../../public/blogCommentsing1.png";
import blogCommentsing2 from "../../public/blogCommentsing2.png";
import blogCommentsing3 from "../../public/blogCommentsing3.png";
import { HiOutlineUser } from "react-icons/hi2";

import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaCheck,
  FaReplyAll,
} from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const BlogMaingSingle = () => {
  return (
    <>
      <HeroSection title="Single Blog" pageName="Blog" />
      <div className="">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 place-content-center">
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-6 pt-10">
                <div className="bg-white p-7 rounded-xl  space-y-5">
                  <div className="p-6 absolute">
                    <div className="flex items-center gap-1 text-white px-3 py-1 bg-[#FF9301] rounded-md">
                      <span>
                        <VscCalendar className="h-4 w-4" />
                      </span>
                      15 Jun 2023
                    </div>
                  </div>
                  <Image
                    src={blogSingleimg}
                    alt="Blog Single img"
                    className="w-full"
                  />
                  <div className="">
                    <p className="flex gap-2 py-6 text-xs">
                      <span>
                        <HiOutlineUser className="w-3 h-4 text-[#FF9301]" />
                      </span>
                      By Admin : <span className="text-[#FF9301]">Jhara</span>
                    </p>
                  </div>
                  <h3 className="text-3xl font-semibold ">
                    How to be appreciated for your hard work a developer
                  </h3>
                  <p className="py-5 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur fermentum sem vitae dolor porta, quis auctor velit
                    varius. Nam a vulputate ipsum, tempus feugiat lacus. Fusce
                    aliquet varius malesuada. Nulla quis turpis neque. Vivamus
                    vitae euismod nisi. Aliquam cursus ultrices lacus Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    fermentum sem vitae dolor porta, quis auctor velit varius.
                    Nam a vulputate ipsum, tempus feugiat lacus. Fusce aliquet
                    varius malesuada. Nulla quis turpis neque. Vivamus vitae
                    euismod nisi.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur fermentum sem vitae dolor porta, quis auctor velit
                    varius. Nam a vulputate ipsum, tempus feugiat lacus. Fusce
                    aliquet varius malesuada. Nulla quis turpis neque. Vivamus
                    vitae euismod nisi.
                  </p>
                  <div className="flex flex-col gap-4 border-r-4 border-l-4 rounded-xl p-4 border-[#FF9301] bg-[#F9FAFC]">
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <div className="flex justify-center">
                      <button className="text-[#FF9301] border border-[#FF9301] py-1 px-3 rounded-lg text-sm">
                        Jaurge Anderson
                      </button>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur fermentum sem vitae dolor porta, quis auctor velit
                    varius. Nam a vulputate ipsum, tempus feugiat lacus. Fusce
                    aliquet varius malesuada. Nulla quis turpis neque. Vivamus
                    vitae euismod nisi. Aliquam cursus ultrices lacus.
                  </p>
                  <div className="flex gap-6 py-4">
                    <div className="relative text-white">
                      <p className="absolute p-4 text-sm w-60 pt-36">
                        Lorem ipsum dolor sit amet, adipiscing elitconsectetur
                        adipiscing elit
                      </p>
                      <Image src={blogSingleimg1} alt="" />
                    </div>
                    <div className="relative text-white">
                      <p className="absolute p-4 text-sm w-60 pt-36">
                        Lorem ipsum dolor sit amet, adipiscing elit consectetur
                        adipiscing elit
                      </p>
                      <Image src={blogSingleimg2} alt="" />
                    </div>
                  </div>
                  <ul className="flex gap-4">
                    <FaCheck className="text-[#FF9301]" />
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                  <ul className="flex gap-4">
                    <FaCheck className="text-[#FF9301]" />
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                  <ul className="flex gap-4">
                    <FaCheck className="text-[#FF9301]" />
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                  <ul className="flex gap-4">
                    <FaCheck className="text-[#FF9301]" />
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>

                  <div className="bg-[#F9FAFC] flex justify-between p-6 rounded-lg">
                    <ul className="flex gap-4 items-center">
                      <li className="font-medium">Tags:</li>
                      <li className="border py-1 px-2 rounded-lg text-sm border-[#FF9301]">
                        Design
                      </li>
                      <li className="border py-1 px-2 rounded-lg text-sm border-[#FF9301]">
                        App
                      </li>
                      <li className="border py-1 px-2 rounded-lg text-sm border-[#FF9301]">
                        UX /Ui
                      </li>
                    </ul>
                    <div>
                      <div className="flex gap-4 justify-center items-center">
                        <h4 className="font-medium">Share:</h4>
                        <FaFacebookF className="text-[#FF9301] border-2 p-2 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                        <FaInstagram className="text-[#FF9301] border-2 p-2 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                        <FaTwitter className="text-[#FF9301] border-2 p-2 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                        <FaLinkedinIn className="text-[#FF9301] border-2 p-2 border-[#FF9301] rounded-full hover:bg-[#FF9301] hover:text-white duration-300" />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="bg-[#FF9301] px-4 py-2 rounded-lg text-white">
                      4 Comments
                    </h4>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="border border-[#FF9301] p-7 rounded-lg">
                      <div className="flex gap-5">
                        <Image
                          src={blogCommentsing}
                          alt=""
                          className="md:w-44"
                        />
                        <div>
                          <p className="text-sm text-end">6 May, 2021</p>
                          <div className="flex gap-4">
                            <h3 className="text-base font-medium text-[#FF9301]">
                              Tahmina Bonny
                            </h3>
                            <div className="">7:26 Am</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur fermentum sem vitae dolor porta,
                            quis auctor velit varius.
                          </p>
                          <div className="flex justify-between pt-2">
                            <div className="flex items-center gap-3">
                              <FaReplyAll />
                              <h4>Reply</h4>
                            </div>
                            <div className="flex gap-4">
                              <ul className="flex gap-2">
                                <AiFillLike />
                                <li>0</li>
                              </ul>
                              <ul className="flex gap-2">
                                <AiFillDislike />
                                <li>0</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5">
                      <div className="col-span-1"></div>
                      <div className="col-span-4">
                        <div className="border border-[#FF9301] p-7 rounded-lg">
                          <div className="flex gap-5">
                            <Image
                              src={blogCommentsing1}
                              alt=""
                              className="md:w-44"
                            />
                            <div className="">
                              <p className="text-sm text-end">12 May, 2021</p>
                              <div className="flex gap-4">
                                <h3 className="text-base font-medium text-[#FF9301]">
                                  Johan Done
                                </h3>
                                <div className="">9:20 Pm</div>
                              </div>
                              <p className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur fermentum sem vitae
                                dolor porta.
                              </p>
                              <div className="flex justify-between pt-2">
                                <div className="flex items-center gap-3">
                                  <FaReplyAll />
                                  <h4>Reply</h4>
                                </div>
                                <div className="flex gap-4">
                                  <ul className="flex gap-2">
                                    <AiFillLike />
                                    <li>0</li>
                                  </ul>
                                  <ul className="flex gap-2">
                                    <AiFillDislike />
                                    <li>0</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-[#FF9301] p-7 rounded-lg">
                      <div className="flex gap-5">
                        <Image
                          src={blogCommentsing2}
                          alt=""
                          className="md:w-44"
                        />
                        <div className="">
                          <p className="text-sm text-end">6 May, 2021</p>
                          <div className="flex gap-4">
                            <h3 className="text-base font-medium text-[#FF9301]">
                              Laurel Wallace
                            </h3>
                            <div className="">1:29 Am</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur fermentum sem vitae dolor porta,
                            quis auctor velit varius.
                          </p>
                          <div className="flex justify-between pt-2">
                            <div className="flex items-center gap-3">
                              <FaReplyAll />
                              <h4>Reply</h4>
                            </div>
                            <div className="flex gap-4">
                              <ul className="flex gap-2">
                                <AiFillLike />
                                <li>0</li>
                              </ul>
                              <ul className="flex gap-2">
                                <AiFillDislike />
                                <li>0</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5">
                      <div className="col-span-1"></div>
                      <div className="col-span-4">
                        <div className="border border-[#FF9301] p-7 rounded-lg">
                          <div className="flex gap-5">
                            <Image
                              src={blogCommentsing3}
                              alt=""
                              className="md:w-44"
                            />
                            <div className="">
                              <p className="text-sm text-end">15 Jul, 2021</p>
                              <div className="flex gap-4">
                                <h3 className="text-base font-medium text-[#FF9301]">
                                  Bryan Morris
                                </h3>
                                <div className="">8:26 Pm</div>
                              </div>
                              <p className="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur fermentum sem vitae
                                dolor porta.
                              </p>
                              <div className="flex justify-between pt-2">
                                <div className="flex items-center gap-3">
                                  <FaReplyAll />
                                  <h4>Reply</h4>
                                </div>
                                <div className="flex gap-4">
                                  <ul className="flex gap-2">
                                    <AiFillLike />
                                    <li>0</li>
                                  </ul>
                                  <ul className="flex gap-2">
                                    <AiFillDislike />
                                    <li>0</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="bg-[#FF9301] px-4 py-2 rounded-lg text-white">
                      Leave a Reply
                    </h4>
                  </div>
                  <div className="">
                    <div className="bg-[#F9FAFC] rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col">
                          <span className="text-sm">Enter Your Name</span>
                          <input
                            placeholder="Name"
                            className="p-3 focus:outline-none border border-[#FF9301] rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm">Enter Your Email</span>
                          <input
                            placeholder="Email"
                            className="p-3 focus:outline-none border border-[#FF9301] rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm">Enter Your Phone</span>
                          <input
                            placeholder="Phone"
                            className="p-3 focus:outline-none border border-[#FF9301] rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm">Enter Your Subject</span>
                          <input
                            placeholder="Subject"
                            className="p-3 focus:outline-none border border-[#FF9301] rounded-lg"
                          />
                        </div>
                      </div>

                      <div className="py-6 flex flex-col">
                        <span className="text-sm">Enter Your Message</span>
                        <textarea
                          placeholder="Messages"
                          className="p-2 focus:outline-none border border-[#FF9301] w-full h-48 rounded-lg"
                        />
                      </div>

                      <div className="pb-6 text-center">
                        <button className="bg-[#FF9301] py-3 px-6 rounded-full text-base text-white">
                          Send Messages
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 py-10">
              <SiteBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMaingSingle;
