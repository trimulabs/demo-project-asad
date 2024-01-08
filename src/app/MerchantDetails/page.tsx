'use client'
import Image from 'next/image'
import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'
import editIcon from '@/../public/Assets/Icons/edit-03.svg'
import { gatewayDetail } from '@/data/constants'
import GatewayIcon from '@/components/icons/Gateway'

export default function MerchantDetails() {
  return (
    <Box
      sx={{
        width: '60%',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        border: `1px solid ${COLORS.selected}`,
        marginTop: theme.spacing(3),
      }}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px 20px 16px 20px',
          borderBottom: `1px solid ${COLORS.selected}`,
        }}
        direction="row"
        spacing={2}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
          }}
          direction="row"
          spacing={2}
        >
          <Box
            sx={{
              width: '52px',
              height: '52px',
              bgcolor: COLORS.lightBlue,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: theme.spacing(1.5),
            }}
          >
            <GatewayIcon />
          </Box>

          <Typography variant="labelL">Encrypt Gateway</Typography>
        </Stack>
        <Button
          color="secondary"
          variant="contained"
          sx={{ gap: theme.spacing(1) }}
        >
          <Image src={editIcon} alt="icon"></Image>
          Edit
        </Button>
      </Stack>

      <Box sx={{ padding: theme.spacing(2.5) }}>
        {gatewayDetail.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderBottom:
                index !== gatewayDetail.length - 1
                  ? `1px solid ${COLORS.selected}`
                  : 'none',
              marginBottom:
                index !== gatewayDetail.length - 1 ? theme.spacing(3) : 'none',
            }}
          >
            <Stack
              direction="column"
              sx={{
                paddingBottom:
                  index !== gatewayDetail.length - 1
                    ? theme.spacing(1.5)
                    : 'none',
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
