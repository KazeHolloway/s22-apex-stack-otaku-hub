"use client";

import StaggeredMenu from "@/components/StaggeredMenu";
import { useEffect } from "react";

const menuItems = [
  { label: "Accueil", ariaLabel: "Go to home page", link: "/" },
  { label: "À propos", ariaLabel: "Learn about us", link: "/a-propos" },
  { label: "Catalogue", ariaLabel: "View our catalogue", link: "/catalogue" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const lockPage = () => {
  document.documentElement.classList.add("menu-open");
  document.querySelector("main")?.setAttribute("inert", "");
};

const unlockPage = () => {
  document.documentElement.classList.remove("menu-open");
  document.querySelector("main")?.removeAttribute("inert");
};

export default function Menu() {
  useEffect(() => unlockPage, []);
  return (
    <div
      className="absolute left-0 w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#000"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen
        colors={["#efefef", "#4CC9F0"]}
        accentColor="#4CC9F0"
        onMenuOpen={lockPage}
        onMenuClose={unlockPage}
      />
    </div>
  );
}
