import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../_actions/AuthActions';

const clientId =
  '1080261591167-mm9nm20fagrcbfjvcv8ofle6659mgtrj.apps.googleusercontent.com';

const gapi = window.gapi;

class GoogleAuth extends React.Component {
  componentDidMount() {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId,
          scope: 'email',
        })
        .then(() => {
          this.googleAuth = gapi.auth2.getAuthInstance();
          this.onAuthChange(this.googleAuth.isSignedIn.get());
          this.googleAuth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // here I call my actions
  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.googleAuth.currentUser.get().getId())
      : this.props.signOut();
  };

  // Here I call the google signIn function
  onSignInClick = () => {
    this.googleAuth.signIn();
  };

  // Here I call the google signOut function
  onSignOutClick = () => {
    this.googleAuth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <p>Loading...</p>;
    } else if (this.props.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui blue google button' onClick={this.onSignInClick}>
          <i className='google icon' />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
