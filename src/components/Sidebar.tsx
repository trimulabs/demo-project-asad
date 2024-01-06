'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Drawer, Toolbar, Box, Typography, Stack, Divider } from '@mui/material'
import logo from '@/../public/Assets/Images/logo.svg'
import theme from '@/styles/ThemeRegistry/theme'
import SidebarList from '@/components/SidebarListItem'
import COLORS from '@/styles/colors'
import userImg from '@/../public/Assets/Images/user.svg'
import chevronUp from '@/../public/Assets/Icons/chevron-up.svg'

import { SIDEBAR_MENU } from '@/data/constants'

const drawerWidth = 212

export default function PermanentDrawerLeft() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const handleItemClick = (index: number) => {
    setSelectedItem(index)
  }

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
          {SIDEBAR_MENU?.map(({ title, Icon }, index) => (
            <React.Fragment key={index}>
              <Box onClick={() => handleItemClick(index)}>
                <SidebarList
                  title={title}
                  icon={() => (
                    <Icon
                      color={
                        selectedItem === index
                          ? COLORS.iconSelected
                          : COLORS.icon
                      }
                    />
                  )}
                  isSelected={selectedItem === index}
                />
              </Box>
              {(index === 5 || index === 8) && (
                <Divider color={COLORS.sideDivider} />
              )}
            </React.Fragment>
          ))}
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
