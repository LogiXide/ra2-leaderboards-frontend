import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { DataList } from '@/components/common';
import { Container } from '@mui/system';
import { Pagination } from '@/components/common/Pagination/Pagination';

const QUERY_ALL_MAPS = gql`
  query Maps($options: MapsOptions) {
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

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => x.name,
  },
  {
    id: 2,
    label: 'Spots',
    render: (x: any) => x.spots,
  },
  {
    id: 3,
    label: 'Image',
    render: (x: any) => x.imageUrl,
  },
  {
    id: 4,
    label: 'Author',
    render: (x: any) => x.author,
  },
];

const Maps: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(2);

  const { data, loading, error } = useQuery(QUERY_ALL_MAPS, {
    variables: {
      options: {
        offset,
        limit,
      },
    },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  console.log(data);

  return (
    <Container>
      <DataList list={data.maps.data} columns={columns} />
      <Pagination
        page={currentPage}
        setPage={setCurrentPage}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        pages={data.maps.totalPages}
      />
    </Container>
  );
};

export default Maps;
