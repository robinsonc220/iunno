import React from 'react'
import { Form, Input, Message, Divider } from 'semantic-ui-react'

export default class Quantity extends React.Component {

  

    render() {

        return (
            
            <Form  onSubmit={() => {this.props.addQty(); this.props.increment()}} size='massive'>
                    <Form.Field inline>
                        <label>Hey {this.props.user.first_name}! How Many People Are Eating?</label>
                        <Divider hidden/>
                        <Input required placeholder='1+' value={this.props.qtyTerm} onChange = {this.props.handleOnChange} />
                        <Message success header='Got It!'/>
                    </Form.Field>
            </Form>
            

        )
    }

}