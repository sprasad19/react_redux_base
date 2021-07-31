import React from 'react'
import {  Form, } from 'react-bootstrap'

const Main =(props)  =>{
    return (


        <Form>
            {/* <Form.Floating> */}
                <Form.Control
                    id="emailAddress"
                    type="email"
                    placeholder="Email Address"
                />
                {/* <label htmlFor="emailAddress">Email Address</label>
            </Form.Floating> */}
        </Form>


    )
}

export default Main
