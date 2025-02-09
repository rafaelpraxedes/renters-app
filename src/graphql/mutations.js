/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      ranking
      address
      status
      statusDate
      site
      rent
      available
      size
      naturalLight
      modernBuilding
      quiet
      balcony
      goodViews
      nearbyParks
      ac
      cornerUnit
      wifi
      furnished
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
      id
      ranking
      address
      status
      statusDate
      site
      rent
      available
      size
      naturalLight
      modernBuilding
      quiet
      balcony
      goodViews
      nearbyParks
      ac
      cornerUnit
      wifi
      furnished
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
      id
      ranking
      address
      status
      statusDate
      site
      rent
      available
      size
      naturalLight
      modernBuilding
      quiet
      balcony
      goodViews
      nearbyParks
      ac
      cornerUnit
      wifi
      furnished
      createdAt
      updatedAt
      __typename
    }
  }
`;
