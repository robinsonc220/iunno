import React from 'react'
import { Divider, Progress, Segment, Grid } from 'semantic-ui-react'
import Quantity from './Quantity.jsx'
import OrderButton from './OrderButton.jsx'
import Confirmation from './Confirmation.jsx'

export default class Homepage extends React.Component {

    state = {
        // sessionQty: 0,
        qtyTerm: "",
        orderCreated: false,
        removeButton: false,
        sessionOrder: {},
        percent: 0
    }

    componentDidMount() {
      
this.props.chooseRestaurant()
  
       
      }

    increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 50,
    }))
 
    addQty = () => {
        this.setState({sessionQty: this.state.qtyTerm })
    }


    handleOnChange = (evt) => {
        this.setState({qtyTerm: evt.target.value})

    }

    // for(var i=0; i < times; i++){
    // doSomething();


    createOrder = () => {

      let randomMeal = () => { for (var i=0; i < this.state.sessionQty; i++) {
        this.props.chooseMeal()}
      }

       fetch(`http://localhost:3000/api/v1/orders`, {
            method: 'POST',
            body: JSON.stringify({
              user_id: this.props.user.id, 
            }),
            headers:{
              'Content-Type': 'application/json',
              "Accept": "application/json"
            }
          })
          .then(res => res.json())
          .then(data => this.setState({sessionOrder: data}, () => this.createOrderMeal(randomMeal))) 
          .then(this.setState({orderCreated: true})) 
    }

    createOrderMeal = (randomMeal) => {
      // console.log('test', this.state.sessionOrder.id)
      // console.log('test', randomMeal)
      fetch(`http://localhost:3000/api/v1/order_meals`, {
            method: 'POST',
            body: JSON.stringify({
              order_id: this.state.sessionOrder.id, 
              meal_id: randomMeal.id
            }),
            headers:{
              'Content-Type': 'application/json',
              "Accept": "application/json"
            }
          })
          .then(res => res.json())
          .then(data => console.log(data))
    }

    renderOrderContent = () => {
        if (this.state.sessionQty > 0 && !this.state.orderCreated) {
          return <OrderButton key={'orderbutton'} increment={this.increment} sessionQty={this.state.sessionQty} createOrder={this.createOrder} chooseMeal={this.props.chooseMeal} randomMeal={this.props.randomMeal} />
        } else if (this.state.orderCreated === true ) {
          // console.log(this.props.randomMeal)
          return <Confirmation key={'confirmtion'} user={this.props.user} randomRestaurant={this.props.randomRestaurant} randomMeal={this.props.randomMeal} sessionOrder={this.state.sessionOrder}/>
        } else {
          return <Quantity key={'quantity'} user={this.props.user} increment={this.increment} qtyTerm={this.state.qtyTerm} addQty={this.addQty} handleOnChange={this.handleOnChange}/>
        }
      }

    render() {
// console.log(this.props.randomMeal)
// console.log(this.state.sessionOrder)
console.log(this.state, "HOMEPAGE STATE")
        return (
            <>
                <Grid textAlign='center' style={{ height: '1vh' }} verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 1050 }}>
                    <Segment basic>
                    {this.renderOrderContent()}
                    {/* <Divider hidden/> */}
                    <Divider hidden/>
                    <Progress percent={this.state.percent} indicating />
                    </Segment>
                  </Grid.Column>
                </Grid>
            </>

        )
    }

}