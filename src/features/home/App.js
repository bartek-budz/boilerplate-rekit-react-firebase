import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../../common/i18n';
import { PageLoader } from '../common';

function TranslationNamespaceLoader() {
  useTranslation('auth'); // todo: find some better way to load namespaces
  return null
}

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (    
      <div className="home-app">
        <div className="page-container">
          <Suspense fallback={<PageLoader />}>
            <TranslationNamespaceLoader/>
            {this.props.children}
          </Suspense>  
        </div>
      </div>
    );
  }
}
