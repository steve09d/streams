import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../_actions/StreamsActions';
import Spinner from '../util/Spinner';

class StreamShow extends React.Component {
  componentDidMount() {
    if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return <Spinner />;

    const { title, description } = this.props.stream;

    return (
      this.props.stream && (
        <div>
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
      )
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
