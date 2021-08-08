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
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Users',
        path: '/home/users',
        icon: <FaIcons.FaUserCircle />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        SubNav: [
            {
                title: 'Report',
                path: '/home/report',
                icon: <AiIcons.AiOutlineBarChart />,
            },
            {
                title: 'Information',
                path: '/Information',
                icon: <BsIcons.BsInfoCircleFill />
            }
        ]
    },
    {
        title: 'Contents',
        path: '/Contents',
        icon: <IoIcons.IoIosSchool />
    },
    {
        title: 'Teams',
        path: '/teams',
        icon: <RiIcons.RiTeamFill />
    },
    {
        title: 'Support',
        path: '/Support',
        icon: <RiIcons.RiContactsBookFill />
    },
    {
        title: 'Profile',
        path: `/profile`,
        icon: <CgIcons.CgProfile />
    }
]