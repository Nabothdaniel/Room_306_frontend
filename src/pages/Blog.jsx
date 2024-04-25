import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import BlogItems from "../components/BlogItems";
import { BlogSwiper } from "../components/BlogSwiper";
import Pagination from "../components/Pagination";

const Blog = () => {
  const names = ["James", "Paul", "John", "George", "Ringo", 1, 2, 3, 4, 5, 6];
  return (
    <div className="block md:flex overflow-x-clip h-screen max-w-[1740px] mx-auto">
      <SideBar />

      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Check Our Blogs"}
          textValue={"Explore our escort at your own Pace"}
        />
        <div
          className="py-6 md:pt-14  grid grid-cols-1
         lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3">
            <h2 className="text-white font-semibold md:text-xl pb-2">Blog</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <BlogItems />
              <BlogItems />
              <BlogItems />
              <BlogItems />
            </div>
            <Pagination />
          </div>

          <div className="mt-5 lg:mt-0">
            <h2 className="text-center text-white font-medium pb-6 lg:pb-2 text-xl">
              Fresh Escorts
            </h2>
            <div>
              <BlogSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
