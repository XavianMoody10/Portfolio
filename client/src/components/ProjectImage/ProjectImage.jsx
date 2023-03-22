import React from "react";

export const ProjectImage = ({ imageSrc }) => {
  return (
    <img className=" h-96 object-cover " src={imageSrc} alt="" width={600} />
  );
};
