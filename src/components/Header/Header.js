import React from 'react';

const Header = ({title, eurPln}) => {
    return (
        <header>
            <h2>{title}</h2>
            <span>1EUR = {parseFloat(eurPln).toFixed(3)} PLN</span>
        </header>
    );
};

export default Header;
