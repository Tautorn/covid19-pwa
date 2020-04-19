import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Button } from 'components'
import COUNTRIES from 'commons/constants/countries'
import { CardPanelContentStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updatedAt, onChange, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <option key={`country-${index}`} value={country.value}>
      {country.label}  
    </option>
  )

  const textCovid19 = `Dados de hoje ${updatedAt} - Número de hoje: ${todayCases}\n. Óbitos hoje: ${todayDeaths}`

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19pwa.netlify.app/',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error))
  }

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);

  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar dados
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar dados
      </Button>
    </div>
  )

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
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

Panel.propTypes = {
  data: PropTypes.object.isRequired,
  updatedAt: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default memo(Panel)
