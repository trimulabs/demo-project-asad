import { Box } from '@mui/material'
import MerchantDetails from '@/components/icons/MerchantDetails'
import SettingsTabs from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <Box sx={{ background: 'secondary', height: '100vh' }}>
        {/* <SettingsTabs /> */}
        <MerchantDetails />
      </Box>
    </>
  )
}
