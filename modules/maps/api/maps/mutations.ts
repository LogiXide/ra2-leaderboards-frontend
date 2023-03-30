import { gql } from '@apollo/client';

const UPDATE_MAP = gql`
  mutation UpdateMap($input: UpdateMapInput!, $id: Int!) {
    updateMap(input: $input, id: $id) {
      maps {
        id
        name
        spots
        imageUrl
        author
      }
    }
  }
`;

const CREATE_MAP = gql`
  mutation createMap($input: CreateMapInput!) {
    createMap(input: $input) {
      maps {
        id
        name
        author
        imageUrl
        spots
      }
    }
  }
`;

export { UPDATE_MAP, CREATE_MAP };
