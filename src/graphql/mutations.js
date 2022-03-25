import { gql } from '@apollo/client'

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
    $getSourceData: String!,
    $getElementData: String!,
    $getElementValueData: [String!]
  ) {
    updateContent(
      getSource: $getSourceData,
      getElement: $getElementData,
      getElementValue: $getElementValueData
    ) {
      response
    }
  }
`

export const UPDATE_LOCATION = gql`
  mutation getLocationValues(
    $getNewAddressData: String!,
    $getNewPostalCodeData: String!,
    $getNewCityData: String!
  ) {
    updateLocation(
      getNewAddress: $getNewAddressData,
      getNewPostalCode: $getNewPostalCodeData,
      getNewCity: $getNewCityData
    ) {
      response
    }
  }
`

export const UPDATE_PHONE_NUMBER = gql`
  mutation getPhoneNumberValue(
    $getNewNumberData: String!
  ) {
    updatePhoneNumber(
      getNewNumber: $getNewNumberData
    ) {
      response
    }
  }
`

export const UPDATE_EMAIL = gql`
  mutation getEmailValue(
    $getNewEmailData: String!
  ) {
    updateEmail(
      getNewEmail: $getNewEmailData
    ) {
      response
    }
  }
`
