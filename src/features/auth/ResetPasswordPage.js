import React, { Component } from 'react';
import { AuthDialog, AuthSuspense, ResetPasswordForm } from '.';
import { LinkPreservingQuery } from '../common'
import { Trans, withTranslation } from 'react-i18next';

export class ResetPasswordPage extends Component {
  static propTypes = {
  };

  render() {
    const t = key => this.props.t('auth:resetPasswordForm.'.concat(key))    
    return (
      <div className="auth-reset-password-page">
        <AuthSuspense>
          <AuthDialog title={t('title')} form={<ResetPasswordForm />} links={
            <div>
              <p>
                <Trans ns="auth" i18nKey="resetPasswordForm.links.signIn">
                  Remember? <LinkPreservingQuery to="/auth/sign-in">Sign in</LinkPreservingQuery>
                </Trans>
              </p>
              <p>                          
                <Trans ns="auth" i18nKey="resetPasswordForm.links.signUp">
                  Unregisterd? <LinkPreservingQuery to="/auth/sign-up">Sign up</LinkPreservingQuery>
                </Trans>
              </p>
            </div>  
          }/>
        </AuthSuspense>
      </div>
    );
  }
}

export default withTranslation()(ResetPasswordPage);