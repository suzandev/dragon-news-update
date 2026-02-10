import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h3 className="font-bold mb-5">Q-Zone</h3>
      <div className="space-y-5">
        <img src={swimmingImage} alt="Swimming" className="w-full" />
        <img src={classImage} alt="Class" className="w-full" />
        <img src={playImage} alt="Playground" className="w-full" />
      </div>
    </div>
  );
};

export default QZone;
