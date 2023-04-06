import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { SEARCH_MAP } from '@/modules/maps/api/maps';

import { SearchMapList } from '../SearchMapList';
import { SelectedMapList } from '../SelectedMapList';

import { Stack } from '@mui/material';

import type { Map } from '@/generated/graphql';

type PropsType = {
  maps: Map[];
};

export const MapPoolMaps: React.FC<PropsType> = (props) => {
  const [checkedMaps, setCheckedMaps] = useState<Map[]>(props.maps);
  const [searchText, setSearchText] = useState<string>('');

  const [maps, setMaps] = useState<Map[]>([]);

  const { data } = useQuery(SEARCH_MAP, {
    variables: {
      where: {
        name_STARTS_WITH: searchText,
      },
      options: {
        limit: 50,
      },
    },
  });

  useEffect(() => {
    setMaps([...checkedMaps, ...maps]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    let isMounted = true;

    setCheckedMaps(props.maps);

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.maps]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      spacing={5}
      mt={5}
    >
      <SearchMapList
        checkedMaps={checkedMaps}
        setCheckedMaps={setCheckedMaps}
        setSearchText={setSearchText}
        searchText={searchText}
        maps={data?.maps.data}
      />

      <SelectedMapList
        checkedMaps={checkedMaps}
        setCheckedMaps={setCheckedMaps}
      />
    </Stack>
  );
};
