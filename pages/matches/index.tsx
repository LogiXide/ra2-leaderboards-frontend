import { useImmer } from 'use-immer';
import { useQuery } from '@apollo/client';

import { Box } from '@mui/material';

import { config } from '@/config';
import { DataList } from '@/modules/core/components/data';

import { Pagination } from '@/modules/core/components/common';

import { GetMatchesQuery, GetMatchesDocument } from '@/generated/graphql';

const columns = [
  {
    id: 1,
    label: 'type',
    render: (x: any) => x.type,
  },
  {
    id: 2,
    label: 'home_id',
    render: (x: any) => (x.type === 'single' ? x.homePlayerId : x.homeTeamId),
  },
  {
    id: 3,
    label: 'away_id',
    render: (x: any) => (x.type === 'single' ? x.awayPlayerId : x.awayTeamId),
  },
];

const Matches: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

  const { data, loading, error } = useQuery<GetMatchesQuery>(
    GetMatchesDocument,
    {
      variables: {
        options: {
          offset: pageInfo.offset,
          limit: pageInfo.limit,
        },
      },
    }
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <Box mt={2}>
      <DataList list={data?.matches.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.matches.totalPages || 0}
      />
    </Box>
  );
};

export default Matches;
