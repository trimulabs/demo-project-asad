// import Image from 'next/image'

import BasicTabs from '@/components/BasicTabs'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box sx={{ background: 'secondary', height: '100vh' }}>
        <BasicTabs></BasicTabs>
      </Box>
    </>
  )
}
