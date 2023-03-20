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

export { GET_MAP_POOLS };
