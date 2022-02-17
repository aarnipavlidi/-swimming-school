import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from "@auth0/auth0-react";

import App from './App'
import AuthorizedApolloProvider from './utils/ApolloProviderAuth0';

import './index.css'
const config = require('./utils/config');

ReactDOM.render(
  <Auth0Provider
    domain={config.AUTH0_DOMAIN_NAME}
    clientId={config.AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    audience={config.AUTH0_AUDIENCE}
    scope={config.AUTH0_SCOPE}
  >
    <AuthorizedApolloProvider>
      <App />
    </AuthorizedApolloProvider>
  </Auth0Provider>,
  document.getElementById('root')
)