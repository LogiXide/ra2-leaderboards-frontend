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

export { GET_TEAMS };
