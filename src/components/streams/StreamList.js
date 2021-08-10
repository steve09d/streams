import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../_actions/StreamsActions';

const StreamList = ({ fetchStreams, streams, currentUser, isSignedIn }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderButtons = stream =>
    stream.userId === currentUser && (
      <div className='right floated content'>
        <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
          Edit
        </Link>
        <Link
          to={`/streams/delete/${stream.id}`}
          className='ui button negative'
        >
          Delete
        </Link>
      </div>
    );

  const renderList = streams.map(stream => {
    return (
      <div style={{ padding: '10px' }} className='item' key={stream.id}>
        {renderButtons(stream)}
        <i className='large middle icon camera' />
        <div className='content'>
          <Link to={`/streams/${stream.id}`} className='header'>
            {stream.title}
          </Link>

          <div className='description'>{stream.description}</div>
        </div>
      </div>
    );
  });

  const renderCreate = () => {
    return (
      isSignedIn && (
        <div>
          <Link to='/streams/new' className='ui positive button right floated'>
            Create Stream
          </Link>
        </div>
      )
    );
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>{renderList}</div>
      {renderCreate()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUser: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
