import React from "react";

const links = [
  {
    name: "Sobre Nosotros",
    path: "/we",
  },
  {
    name: "Proyectos",
    path: "/proyects",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Galería",
    path: "/gallery",
  },
];

const Nav = () => {

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-8 list-none">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.path} className="font-serif font-medium text-[white] text-lg">{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
