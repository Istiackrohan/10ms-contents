import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';
import { FaIcons } from 'react-icons/fa';

const Sidebar = () => {
    const Nav = styled.div`
    background-color: rgb(41, 41, 41);
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;

    const NavIcon = styled(Link)`
    margin-left: 2rem;
    `;
    return (
        <Nav>
            <NavIcon to = "#">
                <FaIcons.FaBars/>
            </NavIcon>
        </Nav>
    )
}

export default Sidebar
