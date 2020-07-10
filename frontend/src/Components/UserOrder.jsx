import React from 'react';
import { Card, Image, Button, Header, Modal, Grid } from 'semantic-ui-react'



export default class UserOrder extends React.Component {

state = { 
    open: false
 }

show = (dimmer) => () => this.setState({ dimmer, open: true })
close = () => this.setState({ open: false })
  
    
    
render() {

const { open, dimmer } = this.state
if(this.props.order.restaurants[0] !== undefined){
  console.log(this.props.order.restaurants[0].img_url)
}
return (
    <>
      {
        this.props.order.restaurants[0] !== undefined ? 
        <>
        <Grid.Column>
        <Card className="userOrder" onClick={this.show('blurring')}>
        {/* <Image src={this.props.order.restaurants[0].img_url} wrapped ui={false} /> */}
        <Card.Content>
        <Card.Header>{this.props.order.restaurants[0].name}</Card.Header>
        <Card.Meta> 
            <span className='date'>Ordered on {this.props.order.created_at.split("T")[0]}</span>
        </Card.Meta>
        <Card.Description>
            {this.props.order.meals[0].name}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button color='olive' content='Reorder' />
        </Card.Content>
        </Card>
        </Grid.Column>
        

        <Modal size='small' dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header><h1>{this.props.order.meals[0].name}</h1></Modal.Header>
          <Modal.Content image>
            <img
              wrapped
              alt={'meal'}
              // size='large'
              src={this.props.order.meals[0].img_url}
              width="auto" height="300"
            />
            <Modal.Description>
              <Header><h2>${this.props.order.meals[0].price}</h2></Header>
              <h4>
              {this.props.order.restaurants[0].name}  
              </h4>
              <p>
              {this.props.order.created_at}
              </p>

            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
          </Modal.Actions>
        </Modal> 
        </>
    :
    null
  }
    </>
    );
  }
}
  
  