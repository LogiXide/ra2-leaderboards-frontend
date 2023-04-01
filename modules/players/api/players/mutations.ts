import { gql } from '@apollo/client';

const CREATE_PLAYER = gql`
  mutation CreatePlayer($input: CreatePlayerInput!) {
    createPlayer(input: $input) {
      players {
        id
        name
      }
    }
  }
`;

const UPDATE_PLAYER = gql`
  mutation UpdatePlayer($input: UpdatePlayerInput!, $id: Int!) {
    updatePlayer(input: $input, id: $id) {
      players {
        id
        name
      }
    }
  }
`;

export { CREATE_PLAYER, UPDATE_PLAYER };
