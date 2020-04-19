import React, { memo } from 'react'
import { Card, Typography, Button } from 'components'
import { CardPanelContentStyled } from './style'

function Panel({ updatedAt }) {

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="body" component="span">COVID19</Typography>
          <Typography variant="h6" component="p">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span">Atualizado em: {updatedAt}</Typography>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Compartilhar
          </Button>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)
