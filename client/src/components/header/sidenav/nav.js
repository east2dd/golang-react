import React from 'react';
import SideNav from 'react-simple-sidenav';
import NavItems from './nav_items'

const Nav = (props) => {
    return (
       <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background:'#242424',
                maxWidth:'220px'
            }}
       >
           <NavItems/>
        </SideNav>
    );
};

export default Nav;