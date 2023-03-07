import { useQuery } from '@apollo/client';
import { useImmer } from 'use-immer';

import { ALL_MAPS } from '@/apollo/maps';
import { DataList } from '@/components/common';
import { Pagination } from '@/components/common/Pagination';

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
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const { data, loading, error } = useQuery(ALL_MAPS, {
    variables: {
      options: {
        offset: pageInfo.offset,
        limit: pageInfo.limit,
      },
    },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <>
      <DataList list={data.maps.data} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data.maps.totalPages}
      />
    </>
  );
};

export default Maps;
