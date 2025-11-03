"use client"
import AOSWrapper from '@/components/common/AOSWrapper'
import Icons from '@/components/icons/ReactIconsLib'
import HeroSection from '@/components/layouts/HeroSection'
import React from 'react'

const Contact_Layout = () => {

    const contactInfo = [
        {
            icon: <Icons.Phone size={30} />,
            title: "Phone Numbers",
            items: [
                {
                    desc: "WhatsApp",
                    value: "+91 9090909090",
                },
                {
                    desc: "Sales",
                    value: "+91 3434343434",
                },
                {
                    desc: "Inquiry",
                    value: "+91 5656565656",
                },
                {
                    desc: "Shipping",
                    value: "+91 7878787878",
                }
            ]
        },
        {
            icon: <Icons.Email size={30} />,
            title: "Emails",
            items: [
                {
                    desc: "Sales",
                    value: "example@sales.com",
                },
                {
                    desc: "Docs",
                    value: "example@docs.com",
                },
                {
                    desc: "Inquiry",
                    value: "example@inquiry.com",
                },
                {
                    desc: "Shipping",
                    value: "example@shipping.com",
                }
            ]
        },
        {
            icon: <Icons.Location size={30} />,
            title: "Locations",
            items: [
                {
                    desc: "Office",
                    value: "Example Address, \n Building-2, near xyz garden, \n 800880, state",
                },
                {
                    desc: "Factory",
                    value: "Example Address, \n Building-2, near xyz garden, \n 800880, state",
                }
            ]
        },
    ]

    return (
        <div className='pb-5'>
            <HeroSection
                imgSrc='/assets/hero-contact.jpg'
                heading={"Contact"}
                desc={"Let's Get In Touch \n Feel Free To Contact, We Would Love To Help You"}
                data-aos="fade-up"
            />
            <AOSWrapper>
                <div className='layout-container bg-primary-bgColor/70 text-theme-text backdrop-blur-md p-5 md:p-10 rounded-xl space-y-4 overflow-hidden'>
                    {contactInfo?.map((info, idx) => (
                        <div
                            key={idx}
                            className='space-y-3'
                        >
                            <div
                                className='flex flex-col space-y-1 items-center justify-center'
                                data-aos="zoom-in"
                                data-aos-offset={idx === 0 && 50}
                            >
                                <div
                                    className='p-2 bg-theme-bgColor text-theme-text rounded-full'
                                >
                                    {info?.icon}
                                </div>
                                <div className='font-semibold text-sm'>
                                    {info?.title}
                                </div>
                            </div>
                            <div>
                                {info?.items?.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className='flex items-center justify-between p-2 text-sm md:w-[70%] lg:w-[50%] mx-auto'
                                    >
                                        <div
                                            className='min-w-16'
                                            data-aos="fade-right"
                                        >
                                            {item?.desc}
                                        </div>
                                        <div
                                            className="flex-1 border-t border-gray-400 mx-3"
                                            data-aos="zoom-in"
                                        ></div>
                                        <div
                                            className='min-w-16 whitespace-pre-line text-right' data-aos="fade-left"
                                        >
                                            {item?.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </AOSWrapper>
        </div >
    )
}

export default Contact_Layout