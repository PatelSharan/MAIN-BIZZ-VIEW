"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-out-cubic",
            offset: 120,
        });

        // refresh on component updates (helps when content loads dynamically)
        AOS.refresh();
    }, []);

    return (
        <div
            data-aos="fade-up"
        >
            {children}
        </div>
    )
};

export default AOSWrapper;
