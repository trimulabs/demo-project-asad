import SettingsTabs from '@/components/SettingsTabs'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box sx={{ background: 'secondary', height: '100vh' }}>
      <SettingsTabs />
    </Box>
  )
}
