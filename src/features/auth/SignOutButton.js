import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { withTranslation } from 'react-i18next';
import { Button, Spinner } from 'react-bootstrap';
import { PopUp } from '../common';
import { translateErrorMessage } from './utils.js';

export class SignOutButton extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    variant: PropTypes.string
  };

  render() {
    const t = this.props.t
    const {signOutPending, signOutError} = this.props.auth
    const {signOut, dismissSignOutError} = this.props.actions 
    const variant = this.props.variant || "primary"

    return (
      <div className="auth-sign-out-button">
        <PopUp show={signOutError != null} title={t('auth:signOut.popUp.title')} message={translateErrorMessage(t, signOutError)} onClose={dismissSignOutError} />
        <Button variant={variant} type="button" disabled={signOutPending} onClick={signOut}>
          {signOutPending &&
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          }
          { signOutPending ? ' ' + t('auth:signOut.label.pending') : t('auth:signOut.label.default')}
        </Button> 
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SignOutButton));
