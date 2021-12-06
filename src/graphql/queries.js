import { gql } from '@apollo/client'

export const CURRENT_LOGGED_ADMIN = gql`
  query {
    me {
      _id
      name
      username
    }
  }
`
