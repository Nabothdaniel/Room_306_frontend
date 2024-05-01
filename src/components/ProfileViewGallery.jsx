import React from "react";
import Blog from "../images/blog.jpeg";

const ProfileViewGallery = ({ galleryClass }) => {
  return (
    <div
      className={`${galleryClass} pt-10 grid gap-4 grid-cols-2 md:grid-cols-4`}
    >
      <img className="rounded-xl h-[300px] object-cover" src={Blog} alt="" />
      <img className="rounded-xl h-[300px] object-cover" src={Blog} alt="" />
      <img className="rounded-xl h-[300px] object-cover" src={Blog} alt="" />
      <img className="rounded-xl h-[300px] object-cover" src={Blog} alt="" />
    </div>
  );
};

export default ProfileViewGallery;
