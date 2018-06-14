import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import Moment from 'moment';

const CurriculumCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{Moment(props.curriculumDate).format('d MMM YY')}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.period}</span>
      </Card.Meta>
      <Card.Description>{props.subject}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      {props.description}
    </Card.Content>
  </Card>
)

export default CurriculumCard; 
