"use client"
import { useState, useEffect } from 'react'


import { Facebook, Instagram, Twitter } from 'lucide-react'



const Footer = () => {


    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null
    }


    return (
        <footer className=" py-8">
            <div className="container mx-auto flex flex-col items-center">
                {/* Social Media Links */}
                <h1 className=' text-2xl font-bold pb-2'>Connect with us</h1>
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com/bl00mresources.ph"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://www.instagram.com/bl00m.ph/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href="https://twitter.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <Twitter size={24} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-4 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Bl00m Resource PH. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
