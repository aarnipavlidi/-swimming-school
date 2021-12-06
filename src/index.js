import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from 'apollo-link-context'

import App from './App'
import './index.css'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('current-admin-token')

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : '',
    }
  }
})

const database = new HttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(database)
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
