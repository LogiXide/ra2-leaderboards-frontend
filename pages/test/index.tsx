import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { DataList } from '@/components/common';
import { Container } from '@mui/system';
import { Pagination } from '@/components/common/Pagination/Pagination';

const QUERY_ALL_CHARACTERS = gql`
  query AllCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        status
        gender
        species
      }
    }
  }
`;

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => x.name,
  },
  {
    id: 2,
    label: 'Status',
    render: (x: any) => x.status,
  },
  {
    id: 3,
    label: 'Gender',
    render: (x: any) => x.gender,
  },
  {
    id: 4,
    label: 'Species',
    render: (x: any) => x.species,
  },
];

const Test: React.FC = () => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useQuery(QUERY_ALL_CHARACTERS, {
    variables: {
      page,
    },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <Container>
      <DataList list={data.characters.results} columns={columns} />
      <Pagination
        page={page}
        setPage={setPage}
        pages={data.characters.info.pages}
      />
    </Container>
  );
};

export default Test;
