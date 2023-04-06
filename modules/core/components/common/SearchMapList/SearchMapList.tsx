import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';

import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@mui/material';

// import { SearchMapDocument, SearchMapQuery } from '@/generated/graphql';

import { SEARCH_MAP } from '@/modules/maps/api/maps';

import type { Map } from '@/generated/graphql';

type PropsType = {
  checkedMaps: Map[];
  setCheckedMaps: (data: Map[]) => void;
  setSearchText: (value: string) => void;
  searchText: string;
  maps: Map[];
};

const SearchMapList: React.FC<PropsType> = (props) => {
  // const [searchText, setSearchText] = useState<string>('');
  const [maps, setMaps] = useState<Map[]>([]);

  console.log(props.maps)

  //  const { data } = useQuery(SEARCH_MAP, {
  //    variables: {
  //      where: {
  //        name_STARTS_WITH: searchText,
  //      },
  //      options: {
  //        limit: 50,
  //      },
  //    },
  //  });

  //  useEffect(() => {
  //    setMaps([...props.checkedMaps, ...maps]);
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //  }, [props]);

  const handleToggle = useCallback(
    (map: Map) => () => {
      const currentMap = props.checkedMaps.find((m) => m.id === map.id);

      let newChecked = [...props.checkedMaps];

      if (!currentMap) {
        newChecked.push(map);

        const newMaps = maps.filter((m) => m.id !== map.id);

        setMaps(newMaps);
      } else {
        const newArr = newChecked.filter((n) => n.id !== map.id);

        newChecked = newArr;
      }

      props.setCheckedMaps([...newChecked]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchText(e.target.value);
  };

  return (
    <Box flexGrow={1} sx={{ border: '1px solid grey' }} padding={2}>
      <Typography textAlign="left" component="h6" variant="h6" mb={2}>
        Available Maps
      </Typography>

      <TextField
        fullWidth
        size="small"
        value={props.searchText}
        onChange={handleChange}
      />

      <List
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 400,
          mt: '10px',
        }}
      >
        {props.maps?.map((map: Map) => (
          <ListItem key={map?.id} disablePadding>
            <ListItemButton onClick={handleToggle(map)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={props.checkedMaps.some((o) => o.id === map.id)}
                />
              </ListItemIcon>
              <ListItemText primary={map?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export { SearchMapList };
