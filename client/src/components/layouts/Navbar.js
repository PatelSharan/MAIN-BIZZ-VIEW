"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Icons from "../icons/ReactIconsLib";
import ScrollTopBtn from "../ui/ScrollTopBtn";


const Navbar = () => {

    const pathName = usePathname();

    const [showResMenu, setShowResMenu] = useState(false);

    const navItem = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/aboutUs",
        },
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "Contact",
            href: "/contact",
        }
    ]


    return (
        <>
            <nav className={`h-14 z-50 ${showResMenu ? "sticky bg-primary-bgColor backdrop-blur-xl" : pathName === "/" ? "absolute bg-transparent" : "bg-primary-bgColor backdrop-blur-xl"} inset-0 flex items-center justify-between px-6`}>
                <div className="text-white text-2xl cursor-pointer whitespace-nowrap font-oswald">
                    <Link
                        href={"/"}
                        onClick={() => {
                            setShowResMenu(false)
                        }}
                    >
                        BizzView
                    </Link>
                </div>
                <ul className="hidden md:flex items-center gap-5">
                    {navItem?.map((item, idx) => (
                        <li
                            key={idx}
                            className={`relative ${pathName === "/" ? "text-white" : "text-theme-text hover:text-theme-bgColor"} transition-all duration-300 ease-in-out text-sm font-medium cursor-pointer group`}
                        >
                            <Link
                                href={item?.href}
                            >
                                <span className={`${(pathName !== "/" && pathName === item?.href) && "text-theme-bgColor"}`}>
                                    {item?.label}
                                </span>
                                {/* Underline */}
                                <span className={`absolute -bottom-1 left-0 h-[2px] w-0 ${pathName === "/" ? "bg-white" : "bg-theme-bgColor"} transition-all duration-300 ease-out group-hover:w-full ${pathName === item?.href && "w-full"}`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div
                    className="text-theme-text md:hidden"
                    onClick={() => {
                        setShowResMenu(!showResMenu)
                    }}
                >
                    {showResMenu ? <Icons.Close size={25} /> : <Icons.Menu size={25} />}
                </div>
            </nav>


            {/* <<=== MAIN = Responsive Menu */}
            <div className={`w-screen h-screen bg-primary-bgColor/90 backdrop-blur-md fixed top-[var(--navbar-height)] z-40 transition-all ease-in-out duration-300 ${showResMenu ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <ul className="flex flex-col items-center justify-center gap-7 my-10">
                    {navItem?.map((item, idx) => (
                        <li
                            key={idx}
                            className={`relative ${pathName === "/" ? "text-white" : "text-theme-text"} font-medium cursor-pointer group`}
                            onClick={() => {
                                setTimeout(() => {
                                    setShowResMenu(false)
                                }, 200);
                            }}
                        >
                            <Link
                                href={item?.href}
                            >
                                <span>
                                    {item?.label}
                                </span>
                                <span className={`absolute -bottom-1 left-0 h-[2px] w-0 ${pathName === "/" ? "bg-white" : "bg-theme-text"} transition-all duration-300 ease-out group-hover:w-full ${pathName === item?.href && "w-full"}`}></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>


            <ScrollTopBtn />
        </>
    );
};

export default Navbar;