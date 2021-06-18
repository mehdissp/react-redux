import React from 'react';
import Modal from '../Modal';
import { fetchStream } from '../../actions'
import { connect } from 'react-redux';
import history from '../../history';


 class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.match.params.id)
    }
  
    render() {
        const actions=(
        <div>
            <button className=" ui red button" >ok</button>
                <button className="ui cancel button" onClick={()=>history.push('/')}>cancel</button>
        </div>
            )

        console.log(this.props.stream.title)
        return (
            <div>
                    <Modal  
                    title={this.props.stream.title}
                    description={`are you delete ${this.props.stream.description}`} 
                    actions={actions}
                    />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
      console.log(state.streams[ownProps.match.params.id])
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);

