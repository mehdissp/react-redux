import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        //console.log({ input })
        //debugger;
        return (
            //  <input 
            //  onChange={formProps.input.onChange}
            //  value={formProps.input.value}
            //  />
            <div className="field">
                <label>
                    {label}
                </label>
                <input{...input} />
            </div>

        )
    }
    onSubmit = (formValues) => {
        console.log(formValues);
    }
    render() {
            console.log(this.props)
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>

                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="button ui primary">
                    Submit
                </button>
            </form>
        )
    }
}
export default reduxForm({ form: 'streamCreate' })(StreamCreate);