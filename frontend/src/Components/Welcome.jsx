import React from 'react'
import { Button, Divider, Image} from 'semantic-ui-react'
import ReactRotatingText from 'react-rotating-text'
import { NavLink } from 'react-router-dom'
import iunnologoorange from '../Assets/iunnologoorange.png'
import dinner from '../Assets/dinner.jpg'
import '/Users/ravenrosa/Desktop/Flatiron School/Mod5/iunno/frontend/src/CustomColors.css'



export default class Welcome extends React.Component {


      renderWelcomeButtons = () => {

       return this.props.user.email !== undefined ? <NavLink to='/homepage'><Button className='ui color3'>Make an Order</Button></NavLink> : this.logRegButtons 
      }

      logRegButtons = <Button.Group size='large'>
      <NavLink to="/login"><Button className='ui color3' content='Login' /></NavLink>
          <Button.Or />
      <NavLink to="/register"><Button className='ui color2' content='Register' /></NavLink>
      </Button.Group>

      // dinnerImage = <img witdh='auto' src={dinner} />

    render() {

        return (
            <div id="vantajs">
                <Divider hidden/>
                <Divider hidden/>
                <Divider hidden/>
                <Divider hidden/>
                    {/* <Segment style={{ backgroundImage:`url(${dinner})`, height: '100%', padding: '1em 0em'} } vertical >  */}
                    
                        <center>
                            <Image src={iunnologoorange} alt='logo'/>
                            <h1>
                                <Divider hidden/>
                                <ReactRotatingText className='ui color12' items={["IUNNO", "IDK", "I don't know",  "Yo no sé", "知りません", "Je ne sais pas", "Ich weiß es nicht", "我不知道", "انا لا اعرف"]} />
                            </h1>
                            <Divider hidden/>
                            {this.renderWelcomeButtons()}
                        </center>
                    {/* </Segment> */}
                    </div>
        )
    }

}