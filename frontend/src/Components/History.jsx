import React from 'react'
import { Divider, Grid} from 'semantic-ui-react'
import UserOrder from './UserOrder'

export default class History extends React.Component {


    state = {
        allOrders: []
    }

    componentDidMount = () => { 
       
        fetch('http://localhost:3000/api/v1/orders')
        .then(res => res.json())
        .then(data => {
          this.setState({
            allOrders: data
          });
        })
    }    

    renderUserOrders = () => {
     const filteredOrders =  this.state.allOrders.filter(order => 
           order.user_id === this.props.user.id )

           console.log(filteredOrders)

           return filteredOrders.map(order => {
            //  return  console.log(order)
               return <><UserOrder key={'user-order'} order={order}/></>
           })
    }
        
        

    render() {
        // console.log(this.state.allOrders)

        return (
            <>
  
                    <Divider hidden/>
                    <h1>{this.props.user.first_name}'s Order History</h1>
                    <Divider hidden/>
                    <Grid stackable relaxed='very' columns='equal'>
                        <Grid.Row columns='4' >
                        {this.renderUserOrders()}
                        </Grid.Row>
                    </Grid>
             </>

                

        

        )
    }

}