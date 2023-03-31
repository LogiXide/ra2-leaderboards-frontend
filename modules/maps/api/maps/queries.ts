import { gql } from '@apollo/client';

const GET_MAPS = gql`
  query GetMaps($options: MapsOptions) {
    maps(options: $options) {
      data {
        id
        name
        spots
        author
        imageUrl
      }
      totalPages
    }
  }
`;

const GET_MAP = gql`
  query GetMap($id: Int!) {
    map(id: $id) {
      id
      name
      spots
      author
      imageUrl
    }
  }
`;

const SEARCH_MAP = gql`
  query searchMap($where: MapsWhere, $options: MapsOptions) {
    maps(where: $where, options: $options) {
      data {
        id
        name
        spots
        author
        imageUrl
      }
    }
  }
`;

export { GET_MAPS, GET_MAP, SEARCH_MAP };
