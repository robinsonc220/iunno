import React from 'react'
import { Button, Form, Segment, Grid, Modal, Divider, Message } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class ProfileContainer extends React.Component {

    state = {
        email: "",
        phone: "",
        address: "",
        city_town: "",
        state: "",
        zip_code: "",
        cc_num: "",
        exp_date: "",
        security_code: "",
        billing_zip: "",
        open: false,
        success: false
      }

      componentDidMount(prevProps) {
        
          this.setState({
            email: this.props.user.email,
            phone: this.props.user.phone,
            address: this.props.user.address,
            city_town: this.props.user.city_town,
            state: this.props.user.state,
            zip_code: this.props.user.zip_code,
            cc_num: this.props.user.cc_num,
            exp_date: this.props.user.exp_date,
            security_code: this.props.user.security_code,
            billing_zip: this.props.user.billing_zip,

          })
        

       
      }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }

      renderSuccess = () => {
      return  <Message
      success
      header='Submitted'
      content="Your profile has been updated!"
    />
      }

      handleProfileSubmit = (userInfo) => {
        console.log("Profile form has been submitted")
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(
            userInfo
          )
        })
        .then(r => r.json())
        .then(data => {
          console.log(data)
        })
        this.setState({success: true})
    }
    

    deleteUser = () => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, {
    method: "DELETE"
    })
      }

    render() {
        let {email, phone, address, city_town, state, zip_code, cc_num, exp_date, security_code, billing_zip} = this.state
        const { open, dimmer } = this.state

        console.log(this.state.email)
        console.log(this.props.user.email)
        return (
            <center>
                <h1> {this.props.user.first_name}'s Profile</h1>
                <Grid textAlign='center' style={{ height: '1vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 1050 }}>
                        <Form size='small' onSubmit={() => this.handleProfileSubmit(this.state)} success>
                            <Segment  >
                                <Form.Group>
                                    <Form.Input disabled label='First name' placeholder={this.props.user.first_name} width={6} onChange={this.handleChange} />
                                    <Form.Input disabled label='Last Name' placeholder={this.props.user.last_name} width={6} onChange={this.handleChange} />
                                    <Form.Input name="email" type='email' value={email} label='E-mail' placeholder={this.props.user.email} width={4} onChange={this.handleChange}/>
                                    <Form.Input name="phone" type='tel' value={phone} label='Phone' placeholder={this.props.user.phone} width={4} onChange={this.handleChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input name="address" value={address} label='Address' placeholder={this.props.user.address} width={12} onChange={this.handleChange}/>
                                    <Form.Input name="city_town" value={city_town} label='City/Town' placeholder={this.props.user.city_town} width={6} onChange={this.handleChange}/>
                                    <Form.Input name="state" value={state} label='State' placeholder={this.props.user.state} width={2} onChange={this.handleChange}/>
                                    <Form.Input name="zip_code" value={zip_code} label='Zip Code' placeholder={this.props.user.zip_code} width={3} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input name="cc_num" type='password' value={cc_num} label='Card Number' placeholder={this.props.user.cc_num} width={8} onChange={this.handleChange}/>
                                    <Form.Input name="exp_date" type='password' value={exp_date} label='Expiration Date' placeholder={this.props.user.exp_date} width={6} onChange={this.handleChange}/>
                                    <Form.Input name="security_code" type='password' value={security_code} label='Security Code' placeholder={this.props.user.security_code} width={2} onChange={this.handleChange} />
                                    <Form.Input name="billing_zip" value={billing_zip} label='Billing Zip Code' placeholder={this.props.user.billing_zip} width={3} onChange={this.handleChange}/>
                                </Form.Group>
                                {this.state.success === true ? this.renderSuccess() : null}
                                 <Button color='olive' type='submit'>Submit</Button> 
                            </Segment>
                        </Form>
                        
                        <Divider hidden/>
                        <Button color='red' onClick={this.show('blurring')}>Delete Account</Button>

                    </Grid.Column>
                </Grid>

                <Modal size='mini' dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your account???</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>No</Button>
                        <NavLink to='/'> <Button onClick={this.deleteUser} positive icon='checkmark' labelPosition='right' content='Yes'/> </NavLink>
                    </Modal.Actions>
                </Modal>
            </center>

            
        )
    }

}