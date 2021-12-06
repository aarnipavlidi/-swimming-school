import { gql } from '@apollo/client'

export const ADMIN_LOGIN = gql`
  mutation getAdminCredentials($usernameData: String!, $passwordData: String!) {
    loginAdmin(username: $usernameData, password: $passwordData) {
      value
    }
  }
`
