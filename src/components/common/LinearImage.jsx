import React from "react";

const LinearImage = ({
  leftColor = "",
  rightColor = "to-transparent",
  imgSrc,
  children,
  isLinear = false,
  height = "h-[700px]",
}) => {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-no-repeat overflow-hidden`}
    >
      <div className="absolute inset-0 z-0">
        <img src={imgSrc} alt="" className="w-full h-full object-cover" />
      </div>
      {isLinear && (
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-r ${leftColor} ${rightColor}`}
        ></div>
      )}
      {children}
    </div>
  );
};

export default LinearImage;
