import React from "react";
import { ReactComponent as Eatery } from "../../icons/restaurant.svg";
import { ReactComponent as Beach } from "../../icons/beach.svg";

const Location = ({ hostelData }) => {
  return (
    <div className="sm:mx-28 flex flex-col sm:flex-row justify-center items-start">
      <div className="sm:w-1/2">
        <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
          Around the Lost Hostel
        </h1>
        <ul className="flex flex-wrap ">
          {hostelData?.nearbyPlaces.map((nearbyPlace) => (
            <li className="flex w-72  justify-start items-center p-2 py-3 rounded-md">
              {nearbyPlace?.icon == "Beach" ? <Beach /> : <Eatery />}
              <nearbyPlace.icon className="mr-2" />
              <p className="text-[#116b89] font-semibold mr-2 text-lg font-playfair">
                {nearbyPlace.place}
              </p>
              <span className="text-[#a9a9a9]">{nearbyPlace.distance}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-1/2">
        <iframe
          src={hostelData?.mapLink}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="maps"
          className="w-[100vw] sm:w-full h-[50vh] p-5"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;