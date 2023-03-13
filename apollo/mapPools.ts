import { gql } from '@apollo/client';

const ALL_MAP_POOLS = gql`
  query MapPools($options: MapPoolsOptions) {
    mapPools(options: $options) {
      data {
        id
        name
      }
      totalPages
    }
  }
`;

export { ALL_MAP_POOLS };