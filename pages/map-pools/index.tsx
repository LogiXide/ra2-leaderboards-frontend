import { useQuery } from '@apollo/client';
import { useImmer } from 'use-immer';

import { ALL_MAP_POOLS } from '@/apollo/mapPools';
import { DataList } from '@/components/common';
import { Pagination } from '@/components/common/Pagination';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => x.name,
  },
];

const MapPools: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const { data, loading, error } = useQuery(ALL_MAP_POOLS, {
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
      <DataList list={data.mapPools.data} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data.mapPools.totalPages}
      />
    </>
  );
};

export default MapPools;
