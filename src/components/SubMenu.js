import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid rgb(185, 14, 14);
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: rgba(197, 113, 113, 0.712);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [Subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!Subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.SubNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.SubNav && Subnav
            ? item.iconOpened
            : item.SubNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {Subnav &&
        item.SubNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
