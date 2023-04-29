import { gql } from '@apollo/client';

const GET_TEAMS = gql`
  query GetTeams($options: TeamsOptions) {
    teams(options: $options) {
      data {
        id
        name
      }
      totalPages
    }
  }
`;

const GET_TEAM = gql`
  query GetTeam($id: Int!) {
    team(id: $id) {
      id
      name
      players {
        id
        name
      }
    }
  }
`;

export { GET_TEAMS, GET_TEAM };
