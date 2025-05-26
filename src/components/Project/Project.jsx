import { FaCode as CodeIcon } from "react-icons/fa6";
import { RiComputerLine as LiveIcon } from "react-icons/ri";

export const Project = ({
  name,
  description,
  sourceCodeLink,
  liveViewLink,
  image,
}) => {
  return (
    <div className=" space-y-5 border-b border-black/70 pb-3">
      <div className=" border border-black/25">
        <img src={image} alt={`${name} image`} />
      </div>

      <div className=" flex flex-col justify-between gap-5">
        <h4 className=" text-3xl font-primary font-semibold">{name}</h4>

        <p className=" text-lg min-h-[60px]">{description}</p>

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
