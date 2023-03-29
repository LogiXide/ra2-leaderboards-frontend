import { useQuery } from '@apollo/client';
import { useImmer } from 'use-immer';

import { Box } from '@mui/material';

import { config } from '@/config';
import { DataList } from '@/modules/core/components/data';
import { Pagination } from '@/modules/core/components/common';

import { GetTeamsDocument, GetTeamsQuery } from '@/generated/graphql';

const columns = [
  {
    id: 1,
    label: 'Name',
    render: (x: any) => x.name,
  },
];

const Teams: React.FC = () => {
  const [pageInfo, setPageInfo] = useImmer({
    currentPage: 1,
    limit: config.pagination.size,
    offset: 0,
  });

  const { data, loading, error } = useQuery<GetTeamsQuery>(GetTeamsDocument, {
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
    <Box mt={2}>
      <DataList list={data?.teams.data || []} columns={columns} />

      <Pagination
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        totalPages={data?.teams.totalPages || 0}
      />
    </Box>
  );
};

export default Teams;
