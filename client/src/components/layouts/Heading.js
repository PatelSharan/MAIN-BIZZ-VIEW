import React from 'react'

const Heading = ({
    desc,
    className,
    ...props
}) => {
    return (
        <div
            className={`font-extrabold font-outfit text-4xl tracking-wide uppercase ${className}`}
            {...props}
        >
            {desc}
        </div>
    )
}

export default Heading