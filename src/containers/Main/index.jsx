import React, { memo, useEffect } from 'react'
import Api from '../../api'
import { Grid } from 'components'
import Panel from './components/Panel'
import Card from './components/Card'
import { ContainerStlyed } from './style'


function Main() {

  useEffect(() => {
    Api.getCountry()
      .then(data => {
        console.log('data', data)
      })
  }, [])

  return (
    <ContainerStlyed>
      <div className="mb-2">
        <Panel
          updatedAt={"15:30 18/04/20"}
        />
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card value="34.232" label="Confirmados" color="#5d78ff" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value="34.232" label="Óbitos" color="#F7B829" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value="34.232" label="Letalidade" color="#E95078" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card value="34.232" label="Total de mortos" color="#67C887" /> 
        </Grid>
      </Grid>      
    </ContainerStlyed>
  )
}

export default memo(Main)