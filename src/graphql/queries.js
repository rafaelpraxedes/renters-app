/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
