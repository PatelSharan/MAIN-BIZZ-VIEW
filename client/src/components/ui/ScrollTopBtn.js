"use client"
import React, { useEffect, useState } from 'react'
import Icons from '../icons/ReactIconsLib'

const ScrollTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }


    return (
        <div className={`transition-all duration-300 ease-in-out ${showBtn ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button
                onClick={() => {
                    handleScrollToTop();
                }}
                className='border border-theme-bgColor bg-theme-bgColor text-theme-text hover:bg-transparent hover:text-theme-bgColor transition-all ease-in-out duration-300 cursor-pointer w-10 h-10 px-0 py-0 fixed bottom-2 right-2 z-50 rounded-xs flex items-center justify-center shadow-sm'
            >
                <Icons.UpArrow size={20} />
            </button>
        </div>
    )
}

export default ScrollTopBtn