import React from 'react';
import FormNavbar from './FormNavbar';
import DropdownNavbar from './DropdownNavbar';
import IconNavbar from './IconNavbar';

const ItemsList = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <IconNavbar/>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <DropdownNavbar />
            </ul>
            <FormNavbar />
        </>
    );
}

export default ItemsList;
