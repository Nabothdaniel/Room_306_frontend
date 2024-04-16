import React from 'react'

const Header = ({ value,headerClass}) => {
    return (
        <div>
            <h1 className={headerClass}>{value}</h1>
        </div>
    )
}

export default Header;
