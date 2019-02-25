import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        1. <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink> - 
        2. <NavLink to="/create" activeClassName="is-active">Go To Create Page</NavLink> - 
        4. <NavLink to="/help" activeClassName="is-active">Go To Help Page</NavLink> - 
    </header>
);

export default Header;