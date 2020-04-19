import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from 'components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />
  
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" /> 
      </Grid>
    </Grid>      
  )
}

Board.propTypes = {
  data: PropTypes.object.isRequired
}

export default memo(Board)