import { gql } from '@apollo/client';

const CREATE_MAP_POOL = gql`
  mutation createMapPool($input: CreateMapPoolInput!) {
    createMapPool(input: $input) {
      mapPools {
        name
      }
    }
  }
`;

export { CREATE_MAP_POOL };
