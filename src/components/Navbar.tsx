/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function ButtonAppBar() {
  //   return (
  //     // <Box sx={{ flexGrow: 1 }}>
  //     <AppBar position="fixed" color="secondary">
  //       <Toolbar>
  //         <Typography variant="h2">System</Typography>
  //       </Toolbar>
  //     </AppBar>
  //     // </Box>
  //   )

  return (
    <>
      <AppBar
        position="static"
        color="secondary"
        // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="headingM">System</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
