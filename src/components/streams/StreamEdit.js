import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchStream, editStream } from '../../_actions/StreamsActions';
import StreamForm from './StreamForm';

const StreamEdit = props => {
  useEffect(() => {
    if (!props.stream) props.fetchStream(props.match.params.id);
  }, [props]);

  const onSubmit = formValues => {
    props.editStream(props.match.params.id, formValues);
  };

  return (
    <Fragment>
      <h2>Edit Stream</h2>
      {props.stream && (
        <div>
          {
            <StreamForm
              initialValues={_.pick(props.stream, 'title', 'description')}
              onSubmit={onSubmit}
            />
          }
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
