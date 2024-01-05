import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/styles/ThemeRegistry/ThemeRegistry'

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

import Wrapper from '@/components/Wrapper'

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
          <Wrapper>
            {/* <Box
            sx={(theme) => ({
              gap: '0px',
              padding: theme.spacing(3),
              marginLeft: '212px',
              background: COLORS.secondaryWhite,
            })}
          > */}
            <Navbar />
            {children}
          </Wrapper>
          {/* </Box> */}
        </ThemeRegistry>
      </body>
    </html>
  )
}
