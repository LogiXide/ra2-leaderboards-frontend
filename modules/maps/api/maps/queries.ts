import { gql } from '@apollo/client';

const GET_MAPS = gql`
  query GetMaps($options: MapsOptions) {
    maps(options: $options) {
      data {
        id
        name
        spots
        author
        imageUrl
      }
      totalPages
    }
  }
`;

export { GET_MAPS };
