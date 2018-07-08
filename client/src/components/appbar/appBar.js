import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {  Menu } from 'semantic-ui-react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class appBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      
        <List>
            <ListItem button>
              <Link to='/'>Home</Link>
            </ListItem>
            <ListItem button>
              <Link to='/finalResult'>Result</Link>
            </ListItem>
            <ListItem button>
              <Link to='/timetable'>Time Table</Link>
            </ListItem>
            <ListItem button>
              <Link to='/assignment'>Assignments</Link>
            </ListItem>
            <ListItem button>
              <Link to='/curriculum'>Curriculum</Link>
            </ListItem>
            
        </List>

      </div>
    );


    return (
      <div>
        <NavBar toggleDrawer={this.toggleDrawer('left', true)}></NavBar>
        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>

      </div>
    );
  }
}

appBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(appBar);