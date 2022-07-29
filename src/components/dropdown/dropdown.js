import React from 'react'
import './dropdown.css'

const dropdownData = [
    {
        link: "Link",
        display: ""
    },
    {
        link: "Link",
        display: ""
    },
    {
        link: "link",
        display: "none"
    },
    {
        link: "link",
        display: ""
    },
    {
        link: "link",
        display: ""

    },
    {
        link: "link",
        display: ""
    }
]




const Dropdown = () => {
    return (
        <div className="Dropdown-container">
            {dropdownData.map((list) => (
                <div className='Dropdown-list'>{list.link}</div>
            ))}
        </div>
    )
}

export default Dropdown