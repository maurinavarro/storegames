import React, { useState } from "react";
import {
  RiShoppingCartLine,
  RiHeart3Line,
  RiAlignLeft,
  RiCloseFill,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-[7vh] lg:h-[10vh] text-gray-300 py-4 px-10 flex items-center justify-between bg-[#181A20] z-40">
      {/*Movile*/}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden text-2xl"
      >
        <RiAlignLeft />
      </button>
      <div
        className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${
          showMenu ? "top-0" : "-top-full"
        }`}
      >
        <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
          <RiCloseFill />
        </button>
        <ul className="mt-20">
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              Streams
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-4xl text-[#E58D27] block p-4 text-center"
            >
              Game Store
            </a>
          </li>
          <li>
            <a href="#" className="text-4xl block text-center p-4">
              News
            </a>
          </li>
        </ul>
      </div>
      {/*Menú*/}
      <ul className="hidden lg:flex items-center gap-6">
        <li>
          <a href="#" className="block text-center p-4">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block text-center p-4">
            Streams
          </a>
        </li>
        <li>
          <a href="#" className="text-[#E58D27] block p-4 text-center">
            Game Store
          </a>
        </li>
        <li>
          <a href="#" className="block text-center p-4">
            News
          </a>
        </li>
      </ul>
      {/*Menú Personal*/}
      <ul className="flex items-center gap-6 text-xl">
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiShoppingCartLine />
          </button>
        </li>
        <li>
          <button className="hover:text-[#E58D27] transition-colors">
            <RiHeart3Line />
          </button>
        </li>
        <li>
          <button>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]"
            />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
