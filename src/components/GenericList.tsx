import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'

interface DataObject {
  entity?: string
  content: string
}

interface GenericListProps {
  title: string
  data: DataObject[]
}

const GenericList: React.FC<GenericListProps> = ({ title, data }) => {
  return (
    <Box
      sx={{
        width: '282px',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2),
        border: `1px solid var(--grayscale-200, ${COLORS.selected})`,
      }}
    >
      <Box
        sx={{
          padding: '16px 20px 16px 20px',
          borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
        }}
      >
        <Typography variant="labelL">{title}</Typography>
      </Box>

      <Box sx={{ padding: theme.spacing(2.5) }}>
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom:
                index !== data.length - 1
                  ? `1px solid var(--grayscale-200, ${COLORS.selected})`
                  : 'none',
              marginBottom:
                index !== data.length - 1 ? theme.spacing(3) : 'none',
            }}
          >
            <Stack
              direction="column"
              sx={{
                paddingBottom:
                  index !== data.length - 1 ? theme.spacing(1.5) : 'none',
                gap: theme.spacing(0.75),
              }}
            >
              <Box>
                <Typography variant="labelS">{item.entity}</Typography>
              </Box>
              <Box>
                <Typography variant="labelSS">{item.content}</Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default GenericList
