import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import Moment from 'moment';

const AssignmentCard = ({ assignmentDate, period, subject, description }) => (
  <Card>
    <Card.Content>
      <Card.Header>{Moment(assignmentDate).format('D MMM YY')}</Card.Header>
      <Card.Meta>
        <span className='date'>{period}</span>
      </Card.Meta>
      <Card.Description>{subject}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      {description}
    </Card.Content>
  </Card>
)

export default AssignmentCard; 
