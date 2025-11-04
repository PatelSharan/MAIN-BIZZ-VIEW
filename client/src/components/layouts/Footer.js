import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary-bgColor text-theme-text py-10 px-3 text-sm space-y-10 border-t border-t-gray-700'>
            <div className='text-center font-clashDisplay text-3xl'>
                BizzView
            </div>
            <div className='flex flex-col items-center justify-center gap-10 md:gap-10'>
                <div>
                    &copy; 2025 All Right Reserved
                </div>
                <div className='text-center space-y-2 text-website-text'>
                    <div>
                        Designed & Created By Sharan Patel
                    </div>
                    <div className='space-x-1'>
                        <span>
                            Email :-
                        </span>
                        <span>
                            sharanpatel4@gmail.com
                        </span>
                    </div>
                    <div className='space-x-1'>
                        <span>
                            Phone :-
                        </span>
                        <span>
                            ( +91 ) 8780759301
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer