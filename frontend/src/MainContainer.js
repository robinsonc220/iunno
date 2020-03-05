import React from 'react'
import Content from './Content'
// import dinner from './dinner.jpg'

export default class MainContainer extends React.Component {

    state = {
        allMeals: [],
        sessionUser: [],
        randomMeal: [],
        sessionOrder: [],
        logged: false
    }

    chooseMeal = () => {
        this.setState({ randomMeal: this.state.allMeals[Math.floor(Math.random()*this.state.allMeals.length)] }) 
      }

    logIn = () => {
        this.setState({logged: true})
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/meals')
          .then(res => res.json())
          .then(data => console.log(data));
    }


    render() {
        console.log(this.state.randomMeal)

        return (

                <Content key={"content"} allMeals={this.state.allMeals} logged={this.state.logged} logIn={this.logIn} chooseMeal={this.chooseMeal} randomMeal={this.state.randomMeal} sessionUser={this.state.sessionUser} handleRegisterSubmit={this.props.handleRegisterSubmit} handleLoginSubmit={this.props.handleLoginSubmit}/>

        )
    }

}