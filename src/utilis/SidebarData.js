import React from 'react'
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <MdIcons.MdHome />,
        cName: 'nav-text',
    },
    {
        title: 'Customer Name',
        path: '/users',
        icon: <MdIcons.MdPermIdentity />,
        cName: 'nav-text'
    },
]