import React from 'react'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import { useAuth0 } from "@auth0/auth0-react";

const config = require('./config');

const AuthorizedApolloProvider = ({ children }) => {

    const { isAuthenticated , getAccessTokenSilently } = useAuth0();
    
    const authLink = setContext( async (_, { headers }) => {

        const token = isAuthenticated ? await getAccessTokenSilently() : null;

        console.log(token);
    
        return {
            headers: {
                ...headers,
                authorization: token ? token : null,
            }
        }
    });

    const database = new HttpLink({
        uri: config.DATABASE_URL,
    });
      
    const client = new ApolloClient({
        connectToDevTools: true,
        cache: new InMemoryCache(),
        link: authLink.concat(database)
    });
    
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
        );
    };

export default AuthorizedApolloProvider;