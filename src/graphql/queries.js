import { gql } from '@apollo/client'

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
      footer {
        location {
          address
          postalCode
          city
        }
        contact {
          phoneNumber
          email
        }
      }
    }
  }
`
