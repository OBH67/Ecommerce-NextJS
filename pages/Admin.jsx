import React from 'react'
import { client } from '../utils/GraphQL';
import { ApolloProvider } from '@apollo/client';
import AdminPage from '../components/AdminLoginComponent/AdminPage';

function Admin() {
    return (
<ApolloProvider client={client}>
    <AdminPage />
</ApolloProvider>
)
}

export default Admin
