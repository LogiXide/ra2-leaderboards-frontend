import { gql } from '@apollo/client';

const UPDATE_MAP_POOL = gql`
  mutation UpdateMapPool($input: UpdateMapPoolInput!, $id: Int!) {
    updateMapPool(input: $input, id: $id) {
      mapPools {
        name
        id
      }
    }
  }
`;

export { UPDATE_MAP_POOL };
