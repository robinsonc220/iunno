import React from 'react';
import './App.css';
import '.'
import Header from './Components/Header.jsx'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'
import RegForm from './Components/RegForm.jsx'
import Welcome from './Components/Welcome'
import Homepage from './Components/Homepage';
import Profile from './Components/Profile'
// import Confirmation from './Components/Confirmation';
import History  from './Components/History'
import LogForm from './Components/LogForm'
import { Image } from 'semantic-ui-react';
import iunnologoblack from './Assets/iunnologoblack.png'

class App extends React.Component {

  state = {
    user: {
      email: "",
      first_name: "",
      last_name: "",
      id: 0
    },
    token: "",
    allRestaurants: [],
    randomRestaurant: {},
    rrMeals: [],
    randomMeal: [],
    sessionQty: 0,
    userHistory: []
  }

  chooseRestaurant= () => {
    let randomRestaurant = this.state.allRestaurants[Math.floor(Math.random()*this.state.allRestaurants.length)]
    this.setState({randomRestaurant: randomRestaurant , rrMeals: randomRestaurant.meals})
  }

  chooseMeal = () => {
    // let randomRestaurant = this.state.allRestaurants[Math.floor(Math.random()*this.state.allRestaurants.length)]
    // this.setState({randomRestaurant: randomRestaurant , rrMeals: randomRestaurant.meals})
    // debugger
    let randomMeal = this.state.rrMeals[Math.floor(Math.random()*this.state.rrMeals.length)]
    this.setState({randomMeal: randomMeal})
    return randomMeal
  }

  // let randomRestaurant = this.state.allRestaurants[Math.floor(Math.random()*this.state.allRestaurants.length)]
  // this.setState({randomRestaurant: randomRestaurant , rrMeals: randomRestaurant.meals})
  // // debugger
  // let randomMeal = this.state.rrMeals[Math.floor(Math.random()*this.state.rrMeals.length)]
  // this.setState({randomMeal: randomMeal})
  // return randomMeal
  

  setHistory = () => { return this.state.user.orders.map(order => {
    return  this.setState({userHistory: order})
        }) 
    } 


    // renderContent = () => {
    //     if (this.props.user) {
    //       return <Homepage key={'homepage'} chooseMeal={this.chooseMeal} />;
    //     } else {
    //       return this.renderForms
    //     }
    // }


  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:3000/api/v1/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: data.user,
            token: data.token
          })
        }
      })
    }
// ------------------------------
    fetch('http://localhost:3000/api/v1/restaurants')
      .then(res => res.json())
      .then(data => {
        this.setState({
          allRestaurants: data
        });
      })
      

      // fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}`)
      // .then(res => res.json())
      // .then(data => {
      //   this.setState({
      //     userHistory: data.users.orders
      //   });
      // })
      // this.setHistory()
    }



  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(data => {
      console.log(data);
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          user: data.user,
          token: data.token
        }, () => {
          this.props.history.push("/homepage")
        })

      }
    })

  }

  handleRegisterSubmit = (userInfo) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(data => {
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          user: data.user,
          token: data.token
        }, () => {
          this.props.history.push(`/homepage`)
        })
      }
    })
  }

  // renderForms = (routerProps) => {
  //   if(routerProps.location.pathname === "/login"){
  //     return <LogForm formName="Login Form" log={this.log} reg={this.reg} handleSubmit={this.handleLoginSubmit}/>
  //   } else if (routerProps.location.pathname === "/register") {
  //     return <RegForm formName="Register Form" log={this.log} reg={this.reg} handleSubmit={this.handleRegisterSubmit}/>
  //   }
  // }

  renderProfile = (routerProps) => {
    return <Profile token={this.state.token} user={this.state.user} />
  }

  signOut = () => {
    localStorage.clear()
    this.setState({user: {}, token: ""})
  }

  render(){
    console.log(this.state, "APP STATE")
    console.log(this.props, "APP PROPS")

    return (
      <div className="App">
        <Header signOut={this.signOut} user={this.state.user}/>
        <Switch>
          <Route path="/login" render={() => <LogForm formName="Login Form" log={this.log} reg={this.reg} handleSubmit={this.handleLoginSubmit}/>} />
          <Route path="/register" render={() => <RegForm formName="Register Form" log={this.log} reg={this.reg} handleSubmit={this.handleRegisterSubmit}/>} />
          <Route path="/profile" render={ this.renderProfile } />
          {/* <Route path="/confirmation" render={() => <Confirmation user={this.state.user} randomMeal={this.state.randomMeal} />}  /> */}
          <Route path="/homepage" render={() => <Homepage chooseMeal={this.chooseMeal} chooseRestaurant={this.chooseRestaurant} user={this.state.user} randomRestaurant={this.state.randomRestaurant} randomMeal={this.state.randomMeal}/>}  />
          <Route path="/history" exact render={() => <History user={this.state.user} userHistory={this.state.userHistory}/> } />
          <Route path="/" exact render={() => <Welcome user={this.state.user}/> } />
          <Route render={ () => <center><h1>You lost bruh?? Page not Found</h1> <Image className='App-logo' src={iunnologoblack}/> </center>} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);

