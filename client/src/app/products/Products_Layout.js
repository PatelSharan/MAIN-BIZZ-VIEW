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
                heading={"Products"}
                desc={"Products That Fits Your Needs"}
            />

            <div className='layout-container bg-primary-bgColor/70 text-theme-text backdrop-blur-md p-5 md:p-10 rounded-xl space-y-5'>
                <TabMenu
                    menuItems={["All", "Spices", "Oil Seeds", "Herbs", "Pulses", "Grains", "Nuts"]}
                />

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5'>
                    <ProductBox
                        desc={"Cumin Seeds\n ( Jeera )"}
                    />
                    <ProductBox
                        desc={"Fennel Seeds\n ( Variyali )"}
                    />
                    <ProductBox
                        desc={"Black Sesame Seeds\n ( Kala Til )"}
                    />
                    <ProductBox
                        desc={"White Sesame Seeds\n ( Safed Til ) "}
                    />
                    <ProductBox
                        desc={"Coriander Seeds\n ( Dhana )"}
                    />
                    <ProductBox
                        desc={" psyllium husk\n ( Isabgol )"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products_Layout