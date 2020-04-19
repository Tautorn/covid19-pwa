import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Button } from 'components'
import COUNTRIES from 'commons/constants/countries'
import { CardPanelContentStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updatedAt, onChange }) {

  const renderCountries = (country, index) => (
    <option key={`country-${index}`} value={country.value}>
      {country.label}  
    </option>
  )

  const shareInfo = () => {
    navigator.share({
      title: 'web.dev',
      text: 'Check out web.dev.',
      url: 'https://web.dev/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="body" component="span">COVID19</Typography>
          <Typography variant="h6" component="p">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span">Atualizado em: {updatedAt}</Typography>
          <div className="pt-2">
            <select onChange={onChange}>
              {COUNTRIES.map(renderCountries)}
            </select>
          </div>
        </div>
        {navigatorHasShare && (
          <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
              Compartilhar
            </Button>
          </div>
        )}
      </CardPanelContentStyled>
    </Card>
  )
}

Panel.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default memo(Panel)
