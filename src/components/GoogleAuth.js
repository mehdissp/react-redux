import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    state={isSignedIn:null};

    componentDidMount() {
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'1039543142952-pmerev6ijvmqp1ujud2pkjvp5letns0l.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                   this.auth=window.gapi.auth2.getAuthInstance();
                   this.setState({isSignedIn:this.auth.isSignedIn.get()});
            });
        })
    }

    renderAuthButton(){
        // if (this.state.isSignedIn===null) {
        //     return <div> نمیدونم وضعیتمو</div>
        // }
         if(this.state.isSignedIn){
            return <div> sign in</div>
        }
        else{
            return <div> not sign in</div>
        }

    }
    
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
