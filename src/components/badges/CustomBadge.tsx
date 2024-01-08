import { Chip } from '@mui/material'
import React from 'react'
import COLORS from '@/styles/colors'

const CustomBadge = ({ content, type }: { content: string; type: string }) => {
  let color = COLORS.selected
  let textColor = 'black'

  if (type === 'Active') {
    color = COLORS.badgeActive
  }
  if (type === 'Disable') {
    color = COLORS.selected
    textColor = COLORS.badgeDisableContent
  }

  return (
    <Chip
      sx={{
        borderRadius: '100px',
        textTransform: 'capitalize',
        padding: '8px 12px 8px 12px',
        height: '24px',
        background: color,
        color: textColor,
      }}
      label={content}
    />
  )
}

export default CustomBadge
