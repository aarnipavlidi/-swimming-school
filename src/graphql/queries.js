import { gql } from '@apollo/client'

export const CURRENT_LOGGED_ADMIN = gql`
  query {
    me {
      __typename
      ... on AdminNotFoundError {
        response
      }
      ... on Admin {
        _id
        name
        username
      }
    }
  }
`

export const CURRENT_CONTENT = gql`
  query {
    showCurrentContent {
      value
      pricing {
        OneTimeSolo
        OneTimeDuo
        ThreeTimeSolo
        ThreeTimeDuo
        FiveTimeSolo
        FiveTimeDuo
      }
      content {
        primaryElement
        secondaryElement
      }
    }
  }
`
