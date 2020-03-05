import React from 'react'
import { Button, Form, Grid, Header, Segment, Divider } from 'semantic-ui-react'

export default class LogForm extends React.Component {

  state = {
    email: "",
    password: "",
  }
  
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {email, password} = this.state

    return(
      <>
        <Divider hidden/>
        <Divider hidden/>
                <Divider hidden/>
                <Divider hidden/>
                <Divider hidden/>
        <Grid textAlign='center' style={{ height: '1vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' className='ui color3' textAlign='center'>
              {formName}
            </Header>
            <Form  size='small' onSubmit={() => this.props.handleSubmit(this.state)}>
              <Segment className='ui color4'>
                <Form.Input required  fluid icon='at' iconPosition='left' placeholder='E-mail address' name="email" value={email} onChange={this.handleChange}/>
                <Form.Input required  fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name="password" value={password} onChange={this.handleChange}/>
                <Button className='ui color3'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    )
  }
}


