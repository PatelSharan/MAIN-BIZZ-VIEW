import React from 'react'

const TabMenu = ({
    menuItems,
    className
}) => {
    return (
        <div>
            <ul className={`flex gap-2 rounded-full bg-primary-bgColor/80 overflow-x-scroll scrollbar-none px-4 py-2 ${className}`}>
                {menuItems?.map(
                    (item, idx) => (
                        <li
                            key={idx}
                            className="px-4 py-1 rounded-full border borderColor text-sm cursor-pointer text-website-text hover:bg-theme-bgColor/10 hover:text-theme-bgColor transition-all duration-200 whitespace-nowrap text-center flex-1"
                        >
                            {item}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default TabMenu