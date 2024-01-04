/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

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
