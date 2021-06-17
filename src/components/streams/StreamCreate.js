import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createStream } from '../../actions';


class StreamCreate extends React.Component {


    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }

    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        //debugger;

        return (

            <div className='field'>

                <div className={className}>
                    <label>
                        {label}
                    </label>
                    <input{...input} />

                </div>
                <div>
                    {this.renderError(meta)}

                    {/* {meta.error} */}
                </div>
            </div>

        );
    }
    onSubmit = (formValues) => {
           console.log(formValues);
        this.props.createStream(formValues);
    }
    render() {
        console.log(this.props)
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >

                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="button ui primary">
                    Submit
                </button>
            </form>
        )
    }
}
const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'errorrrrrr';

    } if (!formValues.description) {
        errors.description = 'e222222222222222'
    }
    console.log(formValues);
    return errors;
};
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped)