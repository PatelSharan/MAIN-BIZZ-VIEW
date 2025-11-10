import Image from 'next/image'
import React from 'react'

const ProductBox = ({
    imgSrc = "/assets/hero3.jpg",
    desc,
    price,
    className,
    descClassName,
    priceClassName,
    ...props
}) => {
    return (
        <div
            className={`bg-primary-bgColor/50 hover:bg-primary-bgColor/60 text-theme-text p-10 rounded-3xl flex flex-col items-center justify-center min-w-60 h-80 space-y-5 cursor-pointer hover:border-[1.5px] hover:border-theme-bgColor ${className}`}
            {...props}
        >
            <div className='w-36 h-36 rounded-full overflow-hidden flex items-center justify-center relative'>
                <Image
                    src={imgSrc}
                    alt='product'
                    fill
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='space-y-1'>
                <div className={`text-sm whitespace-pre-line text-center ${descClassName}`}>
                    {desc}
                </div>
                {price && (
                    <div className={`text-sm whitespace-pre-line text-center ${priceClassName}`}>
                        ( {price} )
                    </div>
                )}
            </div>
        </div>

    )
}

export default ProductBox