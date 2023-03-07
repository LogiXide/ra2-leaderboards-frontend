import { gql } from '@apollo/client';

const ALL_MAPS = gql`
  query Maps($options: MapsOptions) {
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

export { ALL_MAPS };
