import { gql } from '@apollo/client';

const ALL_PLAYERS = gql`
  query allPlayers($options: PlayersOptions) {
   players(options: $options) {
      data {
        id
        name
      }
      totalPages
    }
  }
`;

export { ALL_PLAYERS };
