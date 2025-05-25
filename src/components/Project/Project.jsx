import { FaCode as CodeIcon } from "react-icons/fa6";
import { RiComputerLine as LiveIcon } from "react-icons/ri";

export const Project = ({
  name,
  description,
  sourceCodeLink,
  liveViewLink,
  backgroundImageSrc,
}) => {
  return (
    <div className=" space-y-5 border-b border-black/70 pb-3">
      <div className=" min-h-[300px] lg:h-[400px] 2xl:h-[550px] border border-black/25"></div>

      <div className=" flex flex-col justify-between gap-4 min-h-[150px]">
        <h4 className=" text-3xl font-barlow font-semibold xl:text-4xl">
          {name}
        </h4>

        <p className=" text-lg">{description}</p>

        <div className=" flex gap-3">
          <a href={sourceCodeLink} target="_blank">
            <CodeIcon size={25} />
          </a>

          <a href={liveViewLink} target="_blank">
            <LiveIcon size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
