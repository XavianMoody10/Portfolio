import { Squash as Hamburger } from "hamburger-react";
import GitHubLogo from "../assets/github.png";

export const Header = () => {
  return (
    <header className=" flex items-center justify-between p-3 fixed top-0 w-full">
      <Hamburger size={28} distance="sm" />

      <a href="https://github.com/XavianMoody10" target="_blank">
        <img src={GitHubLogo} width={35} />
      </a>
    </header>
  );
};
