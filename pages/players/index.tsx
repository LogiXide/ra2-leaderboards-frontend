import { useQuery } from '@apollo/client';
import { useImmer } from 'use-immer';

import { ALL_PLAYERS } from '@/apollo/players/queries/player/allPlayers';
import { DataList } from '@/components/common';
import { Pagination } from '@/components/common/Pagination';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => x.name,
  },
];

const Players: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: 2,
    offset: 0,
  });

  const { data, loading, error } = useQuery(ALL_PLAYERS, {
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
      <DataList list={data.players.data} columns={columns} />
      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data.players.totalPages}
      />
    </>
  );
};

export default Players;
