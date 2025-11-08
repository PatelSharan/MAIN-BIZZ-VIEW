"use client"
import AOSWrapper from '@/components/common/AOSWrapper'
import HeroSection from '@/components/layouts/HeroSection'
import ProductBox from '@/components/layouts/ProductBox'
import TabMenu from '@/components/layouts/TabMenu'
import { useGeneralContext } from '@/contexts/generalContext'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Products_Layout = () => {

    const generalContext = useGeneralContext();

    const [categoryItems, setCategoryItems] = useState(["All"]);
    const [activeItem, setActiveItem] = useState("All")
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (!generalContext?.products?.length) return

        const newCategories = [...categoryItems];

        generalContext?.products?.forEach((prdt) => {
            const findedCategory = newCategories?.includes(prdt?.category)

            if (!findedCategory) {
                newCategories.push(prdt?.category)
            }

            setCategoryItems(newCategories)
        })
    }, [generalContext?.products])

    useEffect(() => {
        const filteredPrdts = generalContext?.products?.filter((item) => {
            if (activeItem === "All") {
                return item
            }
            return item.category === activeItem
        })

        setFilteredProducts(filteredPrdts)
    }, [activeItem, generalContext?.products])


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
                        menuItems={[...categoryItems]}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />

                    {filteredProducts?.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5'>
                            {filteredProducts?.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <ProductBox
                                        desc={item?.name}
                                        price={item?.price}
                                        data-aos={idx % 3 === 0 ? "fade-right" : idx % 3 === 1 ? "fade-up" : "fade-left"}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <div className='text-website-text flex items-center justify-center py-4'>
                            No Products Available.
                        </div>
                    )}
                </div>
            </AOSWrapper>
        </div>
    )
}

export default Products_Layout