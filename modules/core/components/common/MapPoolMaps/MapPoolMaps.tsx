import { useState, useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { SEARCH_MAP } from '@/modules/maps/api/maps';

import { ItemList } from '../ItemList';

import Stack from '@mui/material/Stack';
import { Map } from '@/generated/graphql';

type PropsType = {
  selectedMaps: { id: number; name: string; checked: boolean }[];
};

const MapPoolMaps: React.FC<PropsType> = (props) => {
  const { selectedMaps } = props;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchQuery2, setSearchQuery2] = useState<string>('');

  const { data } = useQuery(SEARCH_MAP, {
    variables: {
      where: {
        name_STARTS_WITH: searchQuery,
      },
      options: {
        limit: 50,
      },
    },
  });

  const availableFields = useMemo(() => {
    const result: { id: number; name: string; checked: boolean }[] = [];

    data?.maps?.data.forEach((map: Map) => {
      const newObj = {
        id: map.id,
        name: map.name,
        checked: false,
      };

      result.push(newObj);
    });

    return result;
  }, [data?.maps.data]);

  const selectedFields = useMemo(() => {
    if (searchQuery2) {
      return selectedMaps.filter((it) => it.name.startsWith(searchQuery2));
    }

    return selectedMaps;
  }, [searchQuery2, selectedMaps]);

  const onChecked = (id: number) => {
    console.log(id);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      spacing={5}
      mt={5}
    >
      <ItemList
        title="Available Maps"
        fields={availableFields}
        query={searchQuery}
        onSearch={setSearchQuery}
        onChecked={onChecked}
      />

      <ItemList
        title="Selected Maps"
        fields={selectedFields}
        query={searchQuery2}
        onSearch={setSearchQuery2}
        onChecked={onChecked}
      />
    </Stack>
  );
};

export { MapPoolMaps };
