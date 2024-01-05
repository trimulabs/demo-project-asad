/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { AppBar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        color="secondary"

        // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Typography variant="headingM">System</Typography>
      </AppBar>
    </>
  )
}
