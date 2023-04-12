import { useEffect, useState, useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { SEARCH_MAP } from '@/modules/maps/api/maps';

import { SearchMapList } from '../SearchMapList';
import { SelectedMapList } from '../SelectedMapList';

import { Stack } from '@mui/material';

import type { Map } from '@/generated/graphql';

type PropsType = {
  maps?: Map[];
  control?: any;
  fields?: any;
};

const MapPoolMaps: React.FC<PropsType> = (props) => {
  const [checkedMaps, setCheckedMaps] = useState<Map[]>(props.maps);

  const [searchText, setSearchText] = useState<string>('');

  const [maps, setMaps] = useState<Map[]>([]);

  const getIds = (arr: Map[]) => {
    let result = [] as number[];
    arr.forEach((ar) => result.push(ar.id));

    return result;
  };

  const mapIds = useMemo(() => getIds(checkedMaps), [checkedMaps]);

  console.log(mapIds);

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

    setCheckedMaps(props.maps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

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
        fields={props.fields}
        control={props.control}
        checkedMaps={checkedMaps}
        setCheckedMaps={setCheckedMaps}
      />
    </Stack>
  );
};

export { MapPoolMaps };
