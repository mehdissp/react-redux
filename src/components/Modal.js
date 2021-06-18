import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

export default (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.description}
                </div>
                <div className="actions">
                    {props.actions}
                    {/* <button className=" ui red button" >ok</button>
                <button className="ui cancel button" onClick={()=>history.push('/')}>cancel</button> */}

                </div>

            </div>
        </div>
        ,
        document.getElementById('modal')
    )
}
