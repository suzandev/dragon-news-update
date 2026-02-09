import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 font-bold">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ab.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          voluptas?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
          voluptates.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
