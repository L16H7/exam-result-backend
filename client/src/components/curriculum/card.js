import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CurriculumCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.curriculumDate}</Card.Header>
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
