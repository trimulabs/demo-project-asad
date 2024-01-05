'use client'
import Image from 'next/image'
import * as React from 'react'
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import SettingsIcon from '@mui/icons-material/Settings'
import logo from '@/../public/Assets/Images/logo.png'
import theme from '@/styles/ThemeRegistry/theme'

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
    <>
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
        <Toolbar sx={{ marginTop: theme.spacing(2.5) }}>
          <Image src={logo} alt="LOGO"></Image>
        </Toolbar>

        <List>
          {ListItemsP1.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon color="secondary" />
                  ) : (
                    <MailIcon color="secondary" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: 'grey' }} />
        <List>
          {ListItemsP2.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon color="secondary" />
                  ) : (
                    <MailIcon color="secondary" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ backgroundColor: 'grey' }} />

        <List>
          {ListItemsP3.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ListItem
          sx={{
            color: 'white',
            justifyContent: 'center',
            textAlign: 'right',
            backgroundColor: 'primary',
            boxShadow: '0 -1px 0 #404854 inset',
            // paddingTop: theme.spacing(2),
            // paddingBottom: theme.spacing(2),
            top: 'auto',
            position: 'relative',
            bottom: 0,
            boxSizing: 'border-box',
          }}
        >
          Footer
        </ListItem>
      </Drawer>
    </>
  )
}
