import {gql} from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
mutation Create(
    $firstName: String! 
    $lastName: String! 
    $email: String! 
    $password: String! 
    ) {
    createUser(createUserInput: {
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    }) {
      _id
      firstName
      email
      password
      createdAt
      roles
    }
  }
`