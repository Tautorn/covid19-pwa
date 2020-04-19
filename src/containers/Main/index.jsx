import React, { memo, useEffect, useCallback, useState } from 'react'
import Api from '../../api'
import Panel from './components/Panel'
import Board from './components/Board'
import { ContainerStlyed } from './style'

function Main() {
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})
  const updatedAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api
      .getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])
  
  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStlyed>
      <div className="mb-2">
        <Panel
          data={data}
          updatedAt={updatedAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStlyed>
  )
}

export default memo(Main)