import React from "react";
import Arrow from "../images/arrow-left.svg";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { BlogSwiper } from "../components/BlogSwiper";
import Blog from "../images/blog.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetSingleBlogQuery } from "../redux/BlogApi";
import Footer from "../components/Footer";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(slug);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    navigate("/404");
    return;
  }


  return (
    <div className="block md:flex overflow-x-clip max-w-[1740px] mx-auto">
      <SideBar />
      <div className="flex-1 md:w-[80%] pt-6 md:pt-14 px-6 lg:px-10">
        <Navbar
          Headervalue={"Check Our Blogs"}
          textValue={"Explore our escort at your own Pace"}
        />

        <div className="md:pt-14 pt-3">
          <h2
            onClick={() => navigate(-1)}
            className="text-white font-semibold cursor-pointer flex items-center"
          >
            <img className="size-5 mr-1" src={Arrow} alt="" />
            Back
          </h2>
          <div
            className="py-6  grid grid-cols-1
         lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-3 ">
              <div className="text-[#DADADA] flex justify-between items-center text-xl md:text-3xl font-semibold pb-4">
                <h1> {data.title}</h1>
                <p className="text-[14px]">Views: {data.author.views}</p>
              </div>
              <img
                className="md:max-h-[550px] mb-4 max-h-[300px] object-cover rounded-xl"
                src={`https://room35backend.onrender.com${data.featured_image}`}
                alt=""
              />
              <p className="text-[#DADADA] text-[14px] md:text-base">
                {data.content}
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
        <Footer />
      </div>
    </div>
  );
};

export default SingleBlog;
