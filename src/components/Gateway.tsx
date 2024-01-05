import React from 'react'
import { Grid } from '@mui/material'
import FormData from '@/components/FormData'
import GenericList from '@/components/GenericList'

const listData1 = [
  { entity: 'Customer Service', content: '08 / 16 / 2023' },
  { entity: 'After hours', content: '(800) 228-0210' },
  { entity: 'Chargeback Department', content: '(818) 540-3407' },
]
const listData2 = [
  // { entity: 'Merchant Name', content: 'busa-cs@bankcardusa.com' },
  { content: 'busa-cs@bankcardusa.com' },
]

const Gateway = () => {
  return (
    <Grid container>
      <Grid item gap={2} xl={8} lg={8} md={6} sm={12}>
        <FormData />
      </Grid>

      <Grid item gap={2} xl={4} lg={4} md={6} sm={12}>
        <GenericList
          title="Support Department phone numbers"
          data={listData1}
        />
        <GenericList title="Support email" data={listData2} />
      </Grid>
    </Grid>
  )
}

export default Gateway
