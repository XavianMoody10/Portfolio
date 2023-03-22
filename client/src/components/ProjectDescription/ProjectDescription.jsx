import React from "react";

export const ProjectDescription = ({ reverse, desc }) => {
  return (
    <div className={"p-p-card bg-white w-w-card shadow-xl rounded-lg"}>
      <p className={`w-full text-sm ${reverse ? "text-right" : null}`}>
        {desc}
      </p>
    </div>
  );
};
