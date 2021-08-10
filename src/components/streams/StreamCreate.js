import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../_actions/StreamsActions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <Fragment>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
