import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class SideBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' visible={visible} icon='labeled' vertical inverted style={{ width: '300px' }}>
            <Menu.Item name='home'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item name='result'>
              <Link to='/finalResult'>Result</Link>
            </Menu.Item>
            <Menu.Item name='timetable'>
              <Link to='/timetable'>Time Table</Link>
            </Menu.Item>
            <Menu.Item name='assignments'>
              <Link to='/assignments'>Assignments</Link>
            </Menu.Item>
         </Sidebar>
          <Sidebar.Pusher>
            <Container style={{ height: '100vh' }}>
              <Button onClick={this.toggleVisibility} icon='list' content='Menu' />
              {this.props.children}
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBar;