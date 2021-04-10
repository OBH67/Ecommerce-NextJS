import React from 'react'
import { client } from '../utils/GraphQL';
import { ApolloProvider } from '@apollo/client';
import LoginForm from '../components/LoginComponents/Login';

function Login() {
    return (
        <ApolloProvider client={client}>
            <LoginForm />
        </ApolloProvider>
    )
}

export default Login
