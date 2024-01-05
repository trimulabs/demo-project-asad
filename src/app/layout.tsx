/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakartaSans.className}>
        <ThemeRegistry>
          <CssBaseline />
          <Sidebar />

          <Box
            sx={{
              gap: '0px',
              padding: '24px',
              marginLeft: '212px',
              background: '#F8FAFC',
            }}
          >
            <Navbar />
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
