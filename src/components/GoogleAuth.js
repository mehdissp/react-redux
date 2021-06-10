import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1039543142952-pmerev6ijvmqp1ujud2pkjvp5letns0l.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }
    onSignIn=()=>{
        this.auth.signIn();
    }
    onSignOut=()=>{
        this.auth.signOut();
    }
    renderAuthButton() {
        // if (this.state.isSignedIn===null) {
        //     return <div> نمیدونم وضعیتمو</div>
        // }
        if (this.state.isSignedIn) {
            return <div>
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon" />
                    sign out
                </button>
            </div>
        }
        else {
            return <div>
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon" />
            sign in
                </button>
            </div>
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
