import React from 'react';
import {client} from '../utils/GraphQL';
import {ApolloProvider} from '@apollo/client';
import RegisterForm from '../components/RegisterComponents/RegisterForm';

function Signup() {
    return (
        <ApolloProvider client={client}>
            <RegisterForm />
        </ApolloProvider>
    );
}

export default Signup;