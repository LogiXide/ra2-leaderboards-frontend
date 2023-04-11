import { gql } from '@apollo/client';

const GET_MATCHES = gql`
  query GetMatches($options: MatchesOptions) {
    matches(options: $options) {
      data {
        id
        type
        homePlayerId
        homeTeamId
        awayPlayerId
        awayTeamId
      }
      totalPages
    }
  }
`;

export { GET_MATCHES };
