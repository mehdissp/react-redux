import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'1039543142952-pmerev6ijvmqp1ujud2pkjvp5letns0l.apps.googleusercontent.com',
                scope:'email'
            })
        })
    }
    
    render() {
        return (
            <div>
                GoogleAuth
            </div>
        )
    }
}
