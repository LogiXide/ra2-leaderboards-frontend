import { useState, useMemo, useCallback } from 'react';

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

import type { Map } from '@/generated/graphql';

type PropsType = {
  checkedMaps: Map[];
  setCheckedMaps: (data: Map[]) => void;
};

const SelectedMapList: React.FC<PropsType> = (props) => {
  const [searchText, setSearchText] = useState<string>('');

  const filterMaps = (maps: Map[], query: string) => {
    return maps.filter((map) =>
      map.name.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  const visibleMaps = useMemo(
    () => filterMaps(props.checkedMaps, searchText),
    [props.checkedMaps, searchText]
  );

  const handleToggle = (map: Map) => () => {
    const currentMap = props.checkedMaps.find((m) => m.id === map.id);

    let newChecked = [...props.checkedMaps];

    if (!currentMap) {
      newChecked.push(map);

      const newMaps = props.checkedMaps.filter((m) => m.id !== map.id);

      props.setCheckedMaps(newMaps);
    } else {
      const newArr = newChecked.filter((n) => n.id !== map.id);

      newChecked = newArr;
    }

    props.setCheckedMaps(newChecked);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <Box flexGrow={1} sx={{ border: '1px solid grey' }} padding={2}>
      <Typography textAlign="left" component="h6" variant="h6" mb={2}>
        Select Maps
      </Typography>

      <TextField
        fullWidth
        size="small"
        value={searchText}
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
        {visibleMaps.map((map) => (
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

export { SelectedMapList };
