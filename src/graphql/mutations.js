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
    $OneTimeSolo: Int!,
    $OneTimeDuo: Int!,
    $ThreeTimeSolo: Int!,
    $ThreeTimeDuo: Int!,
    $FiveTimeSolo: Int!,
    $FiveTimeDuo: Int!
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

export const UPDATE_CONTENT = gql`
  mutation getContentValues(
    $getElementData: String!,
    $getElementValueData: [String!]
  ) {
    updateContent(
      getElement: $getElementData,
      getElementValue: $getElementValueData
    ) {
      response
    }
  }
`
