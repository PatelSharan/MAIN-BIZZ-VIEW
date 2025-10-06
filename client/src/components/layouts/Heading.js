import React from 'react'

const Heading = ({
    desc,
    className,
}) => {
    return (
        <div
            className={`font-bold text-3xl font-libreBaskerville ${className}`}
        >
            {desc}
        </div>
    )
}

export default Heading