import React from "react";

const Section = ({ title, text, buttonLabel, image, isImageRight }) => {
  return (
    <section
      className="py-16 px-8 md:flex"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {isImageRight && (
        <>
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 md:mr-8 mt-4 md:mt-0">
            <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
              {title}
            </h2>
            <p className="text-[#a9a9a9]">{text}</p>
            <button className="border-2 border-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#116b89]">
              {buttonLabel}
            </button>
          </div>
        </>
      )}
      {!isImageRight && (
        <>
          <div className="md:w-1/2 md:ml-8 md:mr-8 mt-4 md:mt-0">
            <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
              {title}
            </h2>
            <p className="text-[#a9a9a9]">{text}</p>
            <button className="border-2 border-[#116b89] p-2 px-5 my-4 rounded-md font-medium font-dmsans text-sm text-[#116b89]">
              {buttonLabel}
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Section;