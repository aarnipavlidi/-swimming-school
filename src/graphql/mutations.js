import { gql } from '@apollo/client'

export const ADMIN_LOGIN = gql`
  mutation getAdminCredentials($usernameData: String!, $passwordData: String!) {
    loginAdmin(username: $usernameData, password: $passwordData) {
      value
    }
  }
`

export const UPDATE_PRICING = gql`
  mutation getPricingValues(
    $OneTimeSolo: String,
    $OneTimeDuo: String,
    $ThreeTimeSolo: String,
    $ThreeTimeDuo: String,
    $FiveTimeSolo: String,
    $FiveTimeDuo: String
  ) {
    updatePricing(
      OneTimeSolo: $OneTimeSolo,
      OneTimeDuo: $OneTimeDuo,
      ThreeTimeSolo: $ThreeTimeSolo,
      ThreeTimeDuo: $ThreeTimeDuo,
      FiveTimeSolo: $FiveTimeSolo,
      FiveTimeDuo: $FiveTimeDuo
    ) {
      response
    }
  }
`
