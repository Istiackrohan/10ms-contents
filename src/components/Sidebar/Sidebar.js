import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './Sidebar.css';

const SidebarNav = styled.div`
    background: #13151a;
    width: 14%;
    height: 100vh;
    display: flex;
    justify-content: center;
    box-shadow: 0px 10px 20px black;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {

    return (
        <>
            <IconContext.Provider value={{ color: "salmon" }}>
                <SidebarNav>
                    <SidebarWrap>
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


