import { gql } from '@apollo/client';

const GET_MAP_POOLS = gql`
  query GetMapPools($options: MapPoolsOptions) {
    mapPools(options: $options) {
      data {
        id
        name
      }
      totalPages
    }
  }
`;

const GET_MAP_POOL = gql`
  query GetMapPool($id: Int!) {
    mapPool(id: $id) {
      id
      name
    }
  }
`;

export { GET_MAP_POOLS, GET_MAP_POOL };
