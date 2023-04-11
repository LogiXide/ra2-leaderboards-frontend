import { gql } from '@apollo/client';

const CREATE_MAP_POOL = gql`
  mutation CreateMapPool($input: CreateMapPoolInput!) {
    createMapPool(input: $input) {
      mapPools {
        id
        name

        maps {
          id
        }
      }
    }
  }
`;

const UPDATE_MAP_POOL = gql`
  mutation UpdateMapPool($input: UpdateMapPoolInput!, $id: Int!) {
    updateMapPool(input: $input, id: $id) {
      mapPools {
        id
        name

        maps {
          id
        }
      }
    }
  }
`;

export { CREATE_MAP_POOL, UPDATE_MAP_POOL };
