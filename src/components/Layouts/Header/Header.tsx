import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { CaretDown, ArrowRight, CaretRightIcon } from "@phosphor-icons/react";

import logo from "../../../assets/Company_Logo.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const [openMobileDropdown, setOpenMobileDropdown] = useState("");

  // ONLY REQUIRED DROPDOWNS
  const menuItems = [
    {
      title: "Services",
      links: [
        {
          name: "Keeper of Books",
          path: "/keeper-of-books",
        },

        {
          name: "Wealthcare",
          path: "/wealth-care",
        },

        {
          name: "Whole Finance",
          path: "/whole-finance",
        },

        {
          name: "Living Legacy Strategy",
          path: "/living-legacy-strategy",
        },
      ],
    },
  ];

  return (
    <header className="bg-black sticky top-0 z-50 border-b border-[#1a1a1a] py-2.5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[70px]">
        <div className="flex items-center justify-between h-[82px] xl:gap-[90px]">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[180px] xl:w-[220px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 py-2.5">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm 2xl:text-base px-1 2xl:px-2.5 py-3"
                  : "text-white text-sm 2xl:text-base px-1 2xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              Home
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm 2xl:text-base px-1 2xl:px-2.5 py-3"
                  : "text-white text-sm 2xl:text-base px-1 2xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              About
            </NavLink>

            {/* DROPDOWN MENUS */}
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {/* Menu Title */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    to="/service"
                    className="text-white group-hover:text-[#1F7180] hover:font-bold duration-300 text-sm xl:text-base px-1 xl:px-2.5 py-3"
                  >
                    {item.title}
                  </Link>

                  <CaretDown
                    size={12}
                    weight="bold"
                    className="text-white group-hover:text-[#00c8d7] duration-300"
                  />
                </div>

                {/* Dropdown */}
                <div className="absolute top-[180%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-y-4 group-hover:translate-y-0 min-w-[300px] bg-[#0d0d0d] rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <div className="flex flex-col gap-1">
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        to={link.path}
                        className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-[15px] text-[#d6d6d6] hover:bg-[#111] hover:text-[#00c8d7] duration-300"
                      >
                        <span>{link.name}</span>

                        <ArrowRight
                          size={14}
                          weight="bold"
                          className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 duration-300"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Who We Serve */}
            <NavLink
              to="/who-we-serve"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm 2xl:text-base px-1 2xl:px-2.5 py-3"
                  : "text-white text-sm 2xl:text-base px-1 2xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              Who We Serve
            </NavLink>

            {/* Money Medic */}
            <NavLink
              to="/money-medic"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm 2xl:text-base px-1 2xl:px-2.5 py-3"
                  : "text-white text-sm 2xl:text-base px-1 2xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              Money Medic
            </NavLink>

            {/* Resources */}
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm xl:text-base px-1 xl:px-2.5 py-3"
                  : "text-white text-sm xl:text-base px-1 xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              Resources
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#1F7180] font-bold text-sm xl:text-base px-1 xl:px-2.5 py-3"
                  : "text-white text-sm xl:text-base px-1 xl:px-2.5 py-3 hover:text-[#1F7180] hover:font-bold hover:scale-110 transition-all duration-300"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <button className="group/btn bg-[#2B9896] hover:bg-white  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300 text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold">
              <span className="text-white text-xs sm:text-sm md:text-base font-semibold group-hover/btn:text-[#2B9896] transition-colors duration-300">
                Book Now
              </span>

              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#2B9896] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                <CaretRightIcon size={14} weight="bold" />
              </div>
            </button>
          </div>

          <button
            className="lg:hidden mt-4 ml-auto flex items-center rounded-lg  bg-transparent  justify-center h-16 w-16 text-[#1F7180]"
            onClick={() => setMobileMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#2B9896"
              stroke="#2B9896"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-screen  w-[280px] bg-black shadow-lg z-50 overflow-y-auto  transform transition-transform duration-300 hide-scrollbar ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileMenu(false)}
          className="ml-6 my-6 py-1 px-2.5 text-xl left-0 bg-[#2B9896] text-white rounded-full"
        >
          ✕
        </button>
        <div className=" flex flex-col gap-2">
          <NavLink
            to="/"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            About
          </NavLink>

          {/* DROPDOWN MENUS */}
          {menuItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative">
                {/* Menu Title */}
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between gap-1 cursor-pointer text-[#2B9896] hover:bg-[#2B9896] hover:text-white text-base px-6 py-3"
                >
                  <span className="font-[550]">{item.title}</span>

                  <CaretDown
                    size={16}
                    weight="bold"
                    className={`duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Dropdown */}
                <div
                  className={`overflow-hidden duration-300 ${
                    isOpen
                      ? "max-h-[500px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="min-w-[50px] bg-[#2B9896] rounded-sm p-2 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-col gap-1">
                      {item.links.map((link, i) => (
                        <Link
                          key={i}
                          to={link.path}
                          onClick={() => {
                            setMobileMenu(false);
                          }}
                          className="flex items-center justify-between rounded-sm px-2 py-3 text-[15px] text-[#d6d6d6] hover:bg-[#111] hover:text-[#00c8d7] duration-300"
                        >
                          <span>{link.name}</span>

                          <ArrowRight size={14} weight="bold" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <NavLink
            to="/who-we-serve"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            Who We Serve
          </NavLink>
          <NavLink
            to="/money-medic"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            Money Medic
          </NavLink>
          <NavLink
            to="/resources"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            Resources
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 text-base font-[550] bg-[#2B9896] text-white"
                : "px-6 py-3 text-base font-[550] bg-transparent text-[#2B9896]"
            }
          >
            Contact
          </NavLink>
          {/* CTA */}
          <div className="ml-6 mr-6">
            <button
              onClick={() => setMobileMenu(false)}
              className="bg-[#2B9896] hover:bg-[#1F7180] duration-300 text-white rounded-full  pl-5 pr-3 py-2 flex items-center gap-3 font-semibold text-sm"
            >
              Book Now
              <div className="w-6 h-6 rounded-full bg-white text-[#123F4E] flex items-center justify-center shrink-0">
                <CaretRightIcon size={10} weight="bold" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;
