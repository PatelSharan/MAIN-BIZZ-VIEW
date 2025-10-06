import Image from 'next/image'
import React from 'react'

const ProductBox = ({
    imgSrc = "/assets/hero3.jpg",
    desc,
    className,
    descClassName
}) => {
    return (
        // <div className='relative rounded-xl overflow-hidden min-w-56 cursor-pointer group'>
        //     <Image
        //         src={imgSrc}
        //         width={400}
        //         height={200}
        //         alt='Product'
        //     />

        //     {/* Desc */}
        //     <div className={`absolute bottom-0 w-full bg-white/70 backdrop-blur-sm text-black text-center py-1 text-sm transition-all ease-in-out duration-300 group-hover:bg-white ${descClassName}`}>
        //         {desc}
        //     </div>
        // </div>

        <div className={`bg-primary-bgColor/50 hover:bg-primary-bgColor/60 text-theme-text p-10 rounded-3xl flex flex-col items-center justify-center min-w-60 h-80 space-y-5 cursor-pointer ${className}`}>
            <div className='w-36 h-36 rounded-full overflow-hidden flex items-center justify-center relative'>
                <Image
                    src={imgSrc}
                    alt='product'
                    fill
                    className='object-cover w-full h-full'
                />
            </div>
            <div className={`text-sm whitespace-pre-line text-center ${descClassName}`}>
                {desc}
            </div>
        </div>

    )
}

export default ProductBox