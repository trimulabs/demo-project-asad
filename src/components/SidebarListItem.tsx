'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import COLORS from '@/styles/colors'

interface IconProps {
  color?: string
}
interface Prop {
  title: string
  icon: React.FC<IconProps>
}

const SidebarListItem: React.FC<Prop & { isSelected?: boolean }> = ({
  title,
  icon: Icon,
  isSelected = false,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: '40px',
        p: '0px 8px 0px 8px',
        gap: '12px',
        cursor: 'pointer',
      }}
      onClick={() => {
        console.log('Clicked')
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '8px',
          p: '8px',
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: COLORS.iconSelection,
          },
          background: isSelected ? COLORS.iconSelection : 'none',
        }}
      >
        <Icon color={COLORS.icon} />
        <Typography variant="sidebarList">{title}</Typography>
      </Box>
    </Box>
  )
}

export default SidebarListItem
