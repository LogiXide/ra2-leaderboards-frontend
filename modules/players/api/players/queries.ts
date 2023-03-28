import { gql } from '@apollo/client';

const GET_PLAYERS = gql`
  query GetPlayers($options: PlayersOptions) {
    players(options: $options) {
      data {
        id
        name
      }
      totalPages
    }
  }
`;

export { GET_PLAYERS };
