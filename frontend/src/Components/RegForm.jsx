import React from 'react'
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'
import zxcvbn from 'zxcvbn'

export default class RegForm extends React.Component {

  state = {
    email: "",
    password: "",
    password__input: "",
    first_name: "",
    last_name: "",
    type: 'password',
    score: 'null'
  }

  showHide = this.showHide.bind(this);
  passwordStrength = this.passwordStrength.bind(this);

    showHide(e){
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        type: this.state.type === 'input' ? 'password' : 'input'
      })  
    }
    
    passwordStrength(e){
      if(e.target.value === ''){
        this.setState({
          score: 'null'
        })
      }
      else{
        var pw = zxcvbn(e.target.value);
        this.setState({
          score: pw.score
        });      
      }
  
    }
  
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  changes = (e) => {
    this.passwordStrength(e);
    this.handleChange(e)
  }

  render() {
    let {formName} = this.props
    let {email, password, first_name, last_name} = this.state
    // console.log(this.state.type)

    return(
      <>
        <Divider hidden/>
        <Grid textAlign='center' style={{ height: '1vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' className='ui color2' textAlign='center'>
              {formName}
            </Header>
            <Form size='small' onSubmit={() => this.props.handleSubmit(this.state)}>
              <Segment className='ui color10'>
              <Form.Input required  fluid icon='user' iconPosition='left' placeholder='First Name' name="first_name" value={first_name} onChange={this.handleChange}/>
                <Form.Input required  fluid icon='user' iconPosition='left' placeholder='Last Name' name="last_name" value={last_name} onChange={this.handleChange}/>
                <Form.Input required  fluid icon='at' iconPosition='left' placeholder='E-mail address' name="email" value={email} type='email' onChange={this.handleChange}/>
                <Form.Input required  fluid icon='lock' iconPosition='left' placeholder='Password' type={this.state.type} className="password__input" name="password" value={password} onChange={this.changes}/>
                <span className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                <span className="password__strength" data-score={this.state.score} />
                <Button type='submit' className='ui color2'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}


