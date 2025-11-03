import React from 'react'

const Heading = ({
    desc,
    className,
    ...props
}) => {
    return (
        <div
            className={`font-bold text-3xl font-libreBaskerville ${className}`}
            {...props}
        >
            {desc}
        </div>
    )
}

export default Heading