import React from 'react';
import {fetchStream} from '../../actions';
import { connect } from 'react-redux';



class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render() {
        console.log(this.props.stream)
        if(!this.props.stream){
            return <div>loading</div>
        }
        console.log(this.props)
        return (
            <div>
               {this.props.stream.title}
            </div>
        )
    }
};
const mapStateToProps = (state, ownProps) => {
  //  console.log(state.streams[ownProps.match.params.id])
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{ fetchStream})(StreamEdit);
