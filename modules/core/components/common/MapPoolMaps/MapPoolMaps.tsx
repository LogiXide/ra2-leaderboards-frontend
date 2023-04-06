import { useEffect, useState } from 'react';

import { SearchMapList } from '../SearchMapList';
import { SelectedMapList } from '../SelectedMapList';

import { Stack } from '@mui/material';

import type { Map } from '@/generated/graphql';

type PropsType = {
  maps: Map[];
};

export const MapPoolMaps: React.FC<PropsType> = (props) => {
  const [checkedMaps, setCheckedMaps] = useState<Map[]>([]);

  console.log(checkedMaps);

  useEffect(() => {
    setCheckedMaps(props.maps);
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
      />
      <SelectedMapList
        checkedMaps={checkedMaps}
        setCheckedMaps={setCheckedMaps}
      />
    </Stack>
  );
};
