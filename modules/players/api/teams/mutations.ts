import { gql } from '@apollo/client';

const CREATE_TEAM = gql`
  mutation CreateTeam($input: CreateTeamInput!) {
    createTeam(input: $input) {
      teams {
        id
        name
        players {
          id
        }
      }
    }
  }
`;

const UPDATE_TEAM = gql`
  mutation UpdateTeam($input: UpdateTeamInput!, $id: Int!) {
    updateTeam(input: $input, id: $id) {
      teams {
        id
        name
        players {
          id
        }
      }
    }
  }
`;

export { CREATE_TEAM, UPDATE_TEAM };
