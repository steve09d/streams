import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    return (
      <Fragment>
        {touched && error && (
          <div className='ui error message'>
            <div className='header'>{error}</div>
          </div>
        )}
      </Fragment>
    );
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={`${className} eight wide column`}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Fragment>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='title'
            component={this.renderInput}
            label='Enter Title'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter Description'
          />
          <button type='submit' className='ui primary button'>
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) errors.title = 'You must enter a title';
  if (!formValues.description)
    errors.description = 'You must enter a description';

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
