import React from 'react';

const Header = ({title, eurPln}) => {
    return (
        <header>
            <h2>{title}</h2>
            <span>1EUR = {eurPln} PLN</span>
        </header>
    );
};

export default Header;
