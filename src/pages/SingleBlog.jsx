import React from "react";
import Arrow from "../images/arrow-left.svg";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { BlogSwiper } from "../components/BlogSwiper";
import Blog from "../images/blog.jpeg";

const SingleBlog = () => {
  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Welcome to Room 306"}
          textValue={"Explore our escort at your own pace"}
        />

        <div className="md:pt-14 pt-3">
          <h2 className="text-white font-semibold cursor-pointer flex items-center">
            <img className="size-5 mr-1" src={Arrow} alt="" />
            Back
          </h2>
          <div
            className="py-6  grid grid-cols-1
         lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3 ">
              <h1 className="text-[#DADADA] text-xl md:text-3xl font-semibold pb-4">
                Room306.com review: Adult dating website in Nigeria
              </h1>
              <img
                className="md:max-h-[550px] mb-4 max-h-[300px] object-cover rounded-xl"
                src={Blog}
                alt=""
              />
              <p className="text-[#DADADA] text-[14px] md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                eaque molestiae illo cumque accusantium veritatis, ad dicta
                laboriosam similique provident officia eos vero error saepe
                praesentium nisi possimus magni et doloremque rem nemo assumenda
                hic autem. Cupiditate officia nam error sit adipisci autem
                recusandae quo dolorum et necessitatibus, dolore odit impedit
                blanditiis illum nulla iusto nisi natus sint commodi laudantium
                a fugit! Totam esse odit nam vel delectus perspiciatis hic,
                eaque in nobis veritatis ducimus odio molestiae aut ratione
                excepturi accusamus laudantium dignissimos quisquam. Fuga,
                tempora! Magnam, aperiam sapiente! Officia quaerat dolore quod.
                Doloremque tenetur distinctio veniam, sequi ipsam a consectetur
                deserunt, soluta necessitatibus illum in architecto quam, quo
                itaque ullam minima esse? Amet iure ipsum distinctio dolore vel
                consequuntur, iste eveniet magni, obcaecati veritatis non
                delectus, at corporis facilis officiis perferendis perspiciatis
                odit. Necessitatibus inventore consectetur illum, numquam cumque
                deserunt repellat consequuntur quidem praesentium eius provident
                cum tempore dolore maxime mollitia, molestiae odio et explicabo?
                Et, placeat error! Porro quam ab aliquid libero quod incidunt
                culpa quo? Voluptate fuga, totam iusto aliquam assumenda
                expedita, iure dolores corrupti, unde dicta velit ipsa!
                Voluptatem unde fuga exercitationem aut laboriosam quod dolor
                pariatur, velit nihil hic tenetur deleniti. Magni dolores
                temporibus asperiores?
              </p>
            </div>
            <div>
              <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
                Fresh Escorts
              </h2>
              <BlogSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
