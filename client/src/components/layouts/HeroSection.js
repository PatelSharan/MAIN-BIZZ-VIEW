import Image from 'next/image'
import React from 'react'

const HeroSection = ({
    imgSrc = "/assets/hero5.jpg",
    heading,
    desc,
    className,
    ...props
}) => {
    return (
        <section
            className='relative max-w-screen h-[25rem]'
        >
            <div className='fixed inset-0 -z-10 w-full'>
                <Image
                    src={imgSrc}
                    alt="Hero"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            <div
                className='absolute inset-0 space-y-3 flex flex-col items-center justify-center'
                {...props}
            >
                <h1 className='text-white/90 text-5xl font-bold font-libreBaskerville'>
                    {heading}
                </h1>
                <h1 className='text-white/90 font-poppins whitespace-pre-line text-center'>
                    {desc}
                </h1>
            </div>
        </section>
    )
}

export default HeroSection