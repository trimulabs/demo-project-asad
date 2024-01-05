/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '@/../public/Assets/Images/logo.svg'
import home from '@/../public/Assets/Icons/home-smile.svg'

interface Prop {
  title: string
  icon: string
}

const SidebarListItem: React.FC<Prop> = ({ title, icon }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: '40px',
        p: '0px 8px 0px 8px',
        gap: '12px',
      }}
    >
      <Box
        sx={{
          borderRadius: '8px',
          p: '8px',
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src={home} alt="icon" width={16} height={16} />

        <Typography variant="sidebarList">{title}</Typography>
      </Box>
    </Box>
  )
}

export default SidebarListItem
