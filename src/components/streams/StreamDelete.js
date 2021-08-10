import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../_actions/StreamsActions';

class StreamDelete extends React.Component {
  componentDidMount() {
    if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
  }

  actions() {
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button '>
          Cancel
        </Link>
      </Fragment>
    );
  }

  title() {
    return (
      this.props.stream && (
        <Fragment>Delete {this.props.stream.title}?</Fragment>
      )
    );
  }

  render() {
    return (
      <Modal
        title={this.title()}
        content='Are you sure you want to delete this stream?'
        actions={this.actions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
