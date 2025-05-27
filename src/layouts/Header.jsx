import { Squash as Hamburger } from "hamburger-react";
import GitHubLogo from "../assets/github.png";
import { useContext } from "react";
import { SideNavigationContext } from "../contexts/SideNavigationContext";

export const Header = () => {
  const { sideNavigationIsOpen, setNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className=" fixed top-0 w-full">
      <div className=" py-2 flex items-center justify-between w-[90%] max-w-[1300px] mx-auto">
        <Hamburger
          size={28}
          distance="sm"
          toggled={sideNavigationIsOpen}
          toggle={setNavigationIsOpen}
        />

        <a href="https://github.com/XavianMoody10" target="_blank">
          <img src={GitHubLogo} width={35} />
        </a>
      </div>
    </header>
  );
};
