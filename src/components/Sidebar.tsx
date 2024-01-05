/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import * as React from 'react'
import { Drawer, Toolbar, Box, Typography, Stack, Divider } from '@mui/material'
import logo from '@/../public/Assets/Images/logo.svg'
import theme from '@/styles/ThemeRegistry/theme'
import SidebarList from '@/components/SidebarListItem'
import COLORS from '@/styles/colors'
import userImg from '@/../public/Assets/Images/user.svg'
import chevronUp from '@/../public/Assets/Icons/chevron-up.svg'
import home from '@/../public/Assets/Icons/home-smile.svg'

const drawerWidth = 212

const ListItemsP1 = [
  'Leads',
  'Customers',
  'Orders',
  'Applications',
  'Manifest',
  'Refunds',
]
const ListItemsP2 = ['Channels', 'Products', 'Fulfilment']
const ListItemsP3 = ['Team', 'Reports', 'System', 'Settings']

export default function PermanentDrawerLeft() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          padding: '32px 24px 32px 24px',
        }}
      >
        <Image src={logo} alt="LOGO"></Image>
      </Toolbar>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'space-between',
          height: '100%',
          paddingBottom: theme.spacing(3),
        }}
      >
        <Box>
          <SidebarList title="Lead" icon={home} />
          <SidebarList title="Customers" icon="home" />
          <SidebarList title="Order" icon="home" />
          <SidebarList title="Applications" icon="home" />
          <SidebarList title="Manifest" icon="home" />

          <Divider sx={{ bgcolor: COLORS.sideDivider }} />

          <SidebarList title="Channels" icon="home" />
          <SidebarList title="Products" icon="home" />
          <SidebarList title="Fulfilment" icon="home" />

          <Divider sx={{ bgcolor: COLORS.sideDivider }} />

          <SidebarList title="Team" icon="home" />
          <SidebarList title="Reports" icon="home" />
          <SidebarList title="System" icon="home" />
          <SidebarList title="Settings" icon="home" />
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              padding: '0px 24px',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              alignSelf: 'stretch',
            }}
          >
            <Stack
              direction={'row'}
              sx={{
                borderRadius: '8px',
                p: '8px',
                gap: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={userImg} alt="icon" />
              <Typography variant="sidebarList">User name</Typography>
            </Stack>

            <Image src={chevronUp} alt="icon" />
          </Box>
        </Box>
      </Box>
    </Drawer>
  )
}
