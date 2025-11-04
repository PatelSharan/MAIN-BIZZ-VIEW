import AOSWrapper from '@/components/common/AOSWrapper'
import HeroSection from '@/components/layouts/HeroSection'
import ProductBox from '@/components/layouts/ProductBox'
import TabMenu from '@/components/layouts/TabMenu'
import Image from 'next/image'
import React from 'react'

const Products_Layout = () => {
    return (
        <div className='pb-5'>
            <HeroSection
                imgSrc='/assets/hero12.jpg'
                heading={"PRODUCTS"}
                desc={"Products That Fits Your Needs"}
                data-aos="fade-up"
            />

            <AOSWrapper>
                <div className='layout-container bg-primary-bgColor/70 text-theme-text backdrop-blur-md p-5 md:p-10 rounded-xl space-y-5 overflow-hidden'>
                    <TabMenu
                        menuItems={["All", "Spices", "Oil Seeds", "Herbs", "Pulses", "Grains", "Nuts"]}
                    />

                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5'>
                        {[
                            {
                                desc: "Cumin Seeds\n ( Jeera )",
                            },
                            {
                                desc: "Fennel Seeds\n ( Variyali )",
                            },
                            {
                                desc: "Black Sesame Seeds\n ( Kala Til )",
                            },
                            {
                                desc: "White Sesame Seeds\n ( Safed Til ) ",
                            },
                            {
                                desc: "Coriander Seeds\n ( Dhana )",
                            },
                            {
                                desc: "Cumin Seeds\n ( Jeera )",
                            },
                            {
                                desc: "Cumin Seeds\n ( Jeera )",
                            },
                            {
                                desc: "Psyllium husk\n ( Isabgol )",
                            }
                        ]?.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <ProductBox
                                    desc={item?.desc}
                                    data-aos={idx % 3 === 0 ? "fade-right" : idx % 3 === 1 ? "fade-up" : "fade-left"}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </AOSWrapper>
        </div>
    )
}

export default Products_Layout