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

const GET_PLAYER = gql`
  query GetPlayer($id: Int!) {
    player(id: $id) {
      id
      name
    }
  }
`;

const SEARCH_PLAYER = gql`
  query searchPlayer($where: PlayersWhere, $options: PlayersOptions) {
    players(where: $where, options: $options) {
      data {
        id
        name
      }
    }
  }
`;

export { GET_PLAYERS, GET_PLAYER, SEARCH_PLAYER };
