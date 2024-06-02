import React from "react";


const ProfileEscortGallery = ({ galleryClass, data }) => {
  if (data.length <= 0) {
    return (
      <p
        className={`text-white text-xl flex justify-center h-[20vh] items-center font-semibold ${galleryClass}`}
      >
        No Photos
      </p>
    );
  }

  return (
    <div
      className={`${galleryClass} pt-10 grid md:gap-4 gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}
    >
      {data.map((item, index) => {
        return (
          <img
            className="rounded-xl h-[300px] object-cover"
            key={index}
            src={`https://room35backend.onrender.com${item.photo}`}
          />
        );
      })}
    </div>
  );
};

export default ProfileEscortGallery;
