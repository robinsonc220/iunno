import React from 'react'
import { Image, Dropdown, Menu } from 'semantic-ui-react'
import iunnologoorange from '../Assets/iunnologoorange.png'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {

    state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (

        <Menu className='ui color6'   stackable >
            <Menu.Item>
            <NavLink to="/"> <Image size='mini' src={iunnologoorange} /> </NavLink>
            </Menu.Item>

            <Menu.Menu position='right'>
                <Dropdown item  text={this.props.user.first_name}>
                    <Dropdown.Menu>
                        <NavLink to="/history"><Dropdown.Item name='history' active={activeItem === 'history'} onClick={this.handleItemClick}>Order History</Dropdown.Item></NavLink>
                        <NavLink to='/profile'><Dropdown.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile</Dropdown.Item></NavLink>
                        <NavLink to="/"><Dropdown.Item name='sign-out' active={activeItem === 'sign-out'} onClick={() => this.props.signOut()}>Logout</Dropdown.Item></NavLink>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
        )
    }
}