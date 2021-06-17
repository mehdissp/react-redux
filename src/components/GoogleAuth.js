import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
   

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1039543142952-pmerev6ijvmqp1ujud2pkjvp5letns0l.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }
    onAuthChange = (isSignedIn) => {
        //        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }
    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }
    renderAuthButton() {
        // if (this.state.isSignedIn===null) {
        //     return <div> نمیدونم وضعیتمو</div>
        // }
        if (this.props.isSignedIn) {
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
       // console.log(this.props)
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {isSignedIn :state.auth.isSignedIn,userId:state.auth.userId}
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);