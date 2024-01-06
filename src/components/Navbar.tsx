'use client'
import { AppBar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} color="secondary">
      <Typography variant="headingM">System</Typography>
    </AppBar>
  )
}
