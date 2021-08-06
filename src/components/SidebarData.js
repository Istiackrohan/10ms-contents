import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpen: <RiIcons.RiArrowUpFill/>,
        SubNav: [
            {
                title: 'Users',
                path: '/home/users',
                icon: <FaIcons.FaUserCircle/>,
            },
            {
                title: 'Report',
                path: '/home/report',
                icon: <AiIcons.AiOutlineBarChart/>,
            }
        ]
    },
    {
        title: 'Contents',
        path: '/Contents',
        icon: <IoIcons.IoSchoolSharp/>
    },
    {
        title: 'Teams',
        path: '/teams',
        icon: <RiIcons.RiTeamFill/>
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsInfoCircleFill/>
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <RiIcons.RiContactsBookFill/>
    },
    {
        title: 'Profile',
        path: `/profile`,
        icon: <CgIcons.CgProfile/>
    }
]