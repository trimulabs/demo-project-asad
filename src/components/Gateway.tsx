import React from 'react'
import { Grid } from '@mui/material'
import FormData from '@/components/FormData'
import GenericList from '@/components/GenericList'
import { listData1, listData2 } from '@/data/constants'

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
