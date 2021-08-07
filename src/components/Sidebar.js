import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background-image: linear-gradient(rgb(41, 41, 41), rgb(83, 27, 27), rgb(122, 33, 33));
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 300px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;;
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {

    return (
        <>
            <IconContext.Provider value={{ color: "salmon" }}>
                <Nav>
                </Nav>
                <SidebarNav>
                    <SidebarWrap>
                        {<img style={{margin: "50px"}} src="10ms-contents\images\logo.png"></img>}
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
