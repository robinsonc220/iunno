import React from 'react'
import iunnologo4button from '../Assets/iunnologo4button.png'
import { Image, Modal, Button } from 'semantic-ui-react';
import Emoji from 'a11y-react-emoji'

export default class OrderButton extends React.Component {

    state = {
        open: false
    }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    render() {

        const { open, dimmer } = this.state

        return (

            <>
                <div className="bigbutton-wrap">
                    <button className="big-button" onClick={this.show('blurring')}><Image centered size='medium' src={iunnologo4button}/></button>
                </div>

                <Modal size='mini' dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Are You Sure?</Modal.Header>
                    <Modal.Content>
                        <p>iunno will choose a random meal for you and charge your card</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button compact onClick={this.close} negative>Ahhh No!! <Emoji symbol="😓" /> </Button>
                        <Button compact onClick={()=>{this.props.createOrder(); this.props.increment()}} positive >Confirm Order<Emoji symbol="😆"/></Button>
                    </Modal.Actions>
                </Modal>
            </>

        )
    }

}