"use client"

import { Home, Flower, Phone, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-pink-100 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            className="rounded-full"
                            height={100}
                            width={100}
                            alt="logo"
                            src={"/images/logo.jpg"}
                        />
                    </Link>
                    <h1 className="font-sans text-2xl text-black ml-2">
                        BLOOM PH RESOURCES
                    </h1>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation Links with Icons (Desktop) */}
                <div className="hidden md:flex space-x-2">
                    <Link href={"/"} className="flex items-center justify-center">
                        <div className=" flex gap-2 text-md font-semibold hover:bg-opacity-0 px-2 py-1 rounded-md">
                            Home
                            <Home />
                        </div>
                    </Link>

                    <Link href={"/flower"} className="flex items-center justify-center">
                        <div className=" flex gap-1 text-md font-semibold hover:bg-opacity-0 px-2 py-1 rounded-md">
                            Flower Collections
                            <Flower />
                        </div>
                    </Link>

                    <Link href={"/about"} className="flex items-center justify-center">
                        <div className=" flex gap-1 text-md font-semibold hover:bg-opacity-0 px-2 py-1 rounded-md">
                            About Us
                            <Info />
                        </div>
                    </Link>

                    <Link href={"/contact"} className="flex items-center justify-center">
                        <div className=" flex gap-1 text-md font-semibold hover:bg-opacity-0 px-2 py-1 rounded-md">
                            Contact us
                            <Phone />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (hidden by default) */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white mt-2 py-2 rounded-md shadow-lg">
                    <Link href={"/"} passHref>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Home
                        </div>
                    </Link>
                    <Link href={"/flower"} passHref>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Flower Collections
                        </div>
                    </Link>
                    <Link href={"/about"} passHref>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            About Us
                        </div>
                    </Link>
                    <Link href={"/contact"} passHref>
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Contact Us
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
