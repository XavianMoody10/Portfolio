import { Squash as Hamburger } from "hamburger-react";
import GitHubLogo from "../assets/github.png";

export const Header = () => {
  return (
    <header className=" fixed top-0 w-full">
      <div className=" py-2 flex items-center justify-between w-[90%] max-w-[1800px] mx-auto">
        <Hamburger size={28} distance="sm" />

        <a href="https://github.com/XavianMoody10" target="_blank">
          <img src={GitHubLogo} width={35} />
        </a>
      </div>
    </header>
  );
};
