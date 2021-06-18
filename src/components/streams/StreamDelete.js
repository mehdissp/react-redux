import React from 'react';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux';
import history from '../../history';
import { Link } from 'react-router-dom';


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.match.params.id)
    }

    renderActions() {
        return (
            <div>
                <button
                onClick={()=>this.props.deleteStream(this.props.match.params.id)}
                    className=" ui red button"
                >ok</button>
                {/* <button className="ui cancel button" onClick={() => history.push('/')}>cancel</button> */}
                <Link to="/" className="ui cancel button">cancel</Link>
            </div>
        )
    }
    renderContent() {
        if (!this.props.stream) {
            return 'testttttt';
        }
    }
    render() {
        console.log(this.props.stream.title)
        return (
            <div>
                <Modal
                    title={this.props.stream.title}
                    description={`are you delete ${this.props.stream.description}`}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state.streams[ownProps.match.params.id])
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

