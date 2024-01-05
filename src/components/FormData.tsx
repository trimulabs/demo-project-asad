import * as React from 'react'
import {
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  Button,
} from '@mui/material'

import COLORS from '@/styles/colors'
import theme from '@/styles/ThemeRegistry/theme'
import EmptyUser from '@/../public/Assets/Icons/EmptyUser.png'

const data = [
  { entity: 'Merchant Name', content: 'ABC Payments' },
  { entity: 'Contact Name', content: 'John Smith' },
  { entity: 'Contact Email', content: 'dummy@coding.io' },
  { entity: 'Contact Phone', content: '+6281234567890' },
  { entity: 'Contact Address', content: 'Jakarta' },
  { entity: 'Contact City', content: 'Jakarta' },
  { entity: 'Merchant ID', content: '4069500400011342' },
]

export default function FromData() {
  return (
    <Box
      sx={{
        width: '608px',
        bgcolor: COLORS.white,
        borderRadius: theme.spacing(2),
        border: `1px solid var(--grayscale-200, ${COLORS.selected})`,
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
          borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
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
          <Avatar
            variant="square"
            src={EmptyUser.src}
            sx={{
              bgcolor: COLORS.lightBlue,
              width: '52px',
              height: '52px',
              borderRadius: theme.spacing(1.5),
            }}
          />
          <Typography variant="labelL">Merchant Details</Typography>
        </Stack>
        <Button color="secondary" variant="contained">
          Edit
        </Button>
      </Stack>

      <List sx={{ padding: theme.spacing(2.5) }}>
        {data.map((item) => (
          <ListItem
            key={item.entity}
            disablePadding={true}
            sx={{
              borderBottom: `1px solid var(--grayscale-200, ${COLORS.selected})`,
              paddingBottom: theme.spacing(1.5),
            }}
          >
            <ListItemText primary={item.entity} secondary={item.content} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
