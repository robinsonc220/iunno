import React from 'react'
import ReactRotatingText from 'react-rotating-text'
import Forms from './Components/Forms'
// import dinner from './dinner.jpg'
import { Divider } from 'semantic-ui-react'


export default class Typewriter extends React.Component {
    
    render() {

        return (
            // <div style={{ backgroundImage:`url(${dinner})` }}>
            <center>
              
            <h1>
                <Divider hidden/>
                <ReactRotatingText items={["IUNNO", "IDK", "I don't know",  "Yo no sé", "知りません", "Je ne sais pas", "Ich weiß es nicht", "我不知道", "انا لا اعرف"]} />
            </h1>
            <Forms logIn={this.props.logIn} handleRegisterSubmit={this.props.handleRegisterSubmit} handleLoginSubmit={this.props.handleLoginSubmit}/>
            </center>
            // </div>
        )
    }
}


