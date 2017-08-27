import React, {Component} from 'react';
import {Menu, Container, Button, Icon, Transition} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './menu.css';

const menuItems = [
  {url: '/', text: 'Home'},
  {url: '/', text: 'Home'},
  {url: '/', text: 'Home'},
].map((item, index) => (<Menu.Item as={Link} to={item.url} key={index}>{item.text}</Menu.Item>))

class Default extends Component {

  render() {

    const {toggleLogin, loginVisible} = this.props

    return (
      <Container>
        <Menu size="large" secondary inverted className="default-menu">
          <Menu.Item className="toc">
            <Icon name="sidebar"></Icon>
          </Menu.Item>
          {menuItems}
          <Menu.Item className="right">
            <Button inverted
                    onClick={toggleLogin}
                    active={loginVisible}>Login</Button>
            <Button inverted>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

export const DefaultMenu = connect(
  state => {
    return {
      loginVisible: state.toggleLogin.visible
    }
  },
  actions
)(Default);

export class FollowingMenu extends Component {

  render() {
    const {visible} = this.props;

    return (
      <Transition animation="fade" visible={visible} duration={300}>
        <Menu size="large" fixed="top">
          <Container>
            {menuItems}
            <div className="right menu">
              <Menu.Item><Button>Log in</Button></Menu.Item>
              <Menu.Item><Button primary>Sign up</Button></Menu.Item>
            </div>
          </Container>
        </Menu>
      </Transition>
    )
  }
}
