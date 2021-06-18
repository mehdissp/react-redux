import _ from 'lodash';
import React from 'react';
import { fetchStream, editStream } from '../../actions';
import { connect } from 'react-redux';
import StreamForm from '../streams/StreamForm';



class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.stream)
    }
    onSubmit=formValues => {
        this.props.editStream(this.props.match.params.id,formValues)
    }

    render() {
        console.log(this.props.stream)
        if (!this.props.stream) {
            return <div>loading</div>
        }
        return (
            <div>
              <h3>editStream</h3>
              <StreamForm  
            //  initialValues={{title:this.props.stream.title ,description:this.props.stream.description}}
            initialValues={_.pick(this.props.stream ,'title','description')}
              onSubmit={this.onSubmit}
              />
            </div>
        )
    }
};
const mapStateToProps = (state, ownProps) => {
    //  console.log(state.streams[ownProps.match.params.id])
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
