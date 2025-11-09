"use client"
import AOSWrapper from '@/components/common/AOSWrapper'
import Icons from '@/components/icons/ReactIconsLib'
import HeroSection from '@/components/layouts/HeroSection'
import { useGeneralContext } from '@/contexts/generalContext'
import React, { useEffect, useState } from 'react'

const Contact_Layout = () => {

    const generalContext = useGeneralContext();

    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        if (!generalContext?.contacts?.length) return;

        const updatedContacts = generalContext?.contacts?.map((item) => {
            let icon;
            if (item?.category === "Owner") {
                icon = <Icons.User size={20} />
            }
            else if (item?.category === "Phone numbers") {
                icon = <Icons.Phone size={20} />
            }
            else if (item?.category === "Emails") {
                icon = <Icons.Email size={20} />
            }
            else if (item?.category === "Locations") {
                icon = <Icons.Location size={20} />
            }

            return {
                icon: icon,
                ...item
            }
        })

        setContacts(updatedContacts);
    }, [generalContext?.contacts])


    return (
        <div className='pb-5'>
            <HeroSection
                imgSrc='/assets/hero-contact.jpg'
                heading={"CONTACT"}
                desc={"Let's Get In Touch \n Feel Free To Contact, We Would Love To Help You"}
                data-aos="fade-up"
            />
            <AOSWrapper>
                <div className='layout-container bg-primary-bgColor/70 text-theme-text backdrop-blur-md p-5 md:p-10 rounded-xl space-y-4 overflow-hidden'>
                    {contacts?.map((info, idx) => (
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
                                    {info?.category}
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
                                            {item?.title}
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