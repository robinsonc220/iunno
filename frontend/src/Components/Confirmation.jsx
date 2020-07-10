import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


export default class Confirmation extends React.Component {

    render() {
console.log(this.props.sessionOrder.restaurants)
        return (
            <>
                <h2>Order Complete!</h2>
                <h3>Enjoy your {this.props.randomMeal.name} from <Link>{this.props.randomRestaurant.name}</Link>!</h3>
                <img id={'meal-pic'} alt={'meal'} src={this.props.randomMeal.img_url} width="auto" height="300"/>
                <h4>Your total price is ${this.props.randomMeal.price}.</h4> 
                <p>{this.props.randomMeal.description}</p>
                <h4> Bon Appétit! </h4> <NavLink to='/'><Button>Home</Button></NavLink>
            </>
        )
    }

}