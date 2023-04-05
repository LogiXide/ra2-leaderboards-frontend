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

type PropsType = {
  maps: { id: number; name: string }[];
};

const SelectedMapList: React.FC<PropsType> = (props) => {
  const [searchText, setSearchText] = useState<string>('');

  const mapsIds = () => {
    const result: number[] = [];

    props.maps.forEach((map) => result.push(map.id));

    return result;
  };

  const [checked, setChecked] = useState<number[]>(mapsIds());

  const filterMaps = (maps: { id: number; name: string }[], query: string) => {
    return maps.filter((map) =>
      map.name.toLowerCase().startsWith(query.toLowerCase())
    );
  };

  const visibleMaps = useMemo(
    () => filterMaps(props.maps, searchText),
    [props.maps, searchText]
  );

  const handleToggle = useCallback(
    (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    },
    [checked]
  );

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
            <ListItemButton onClick={handleToggle(map?.id || 0)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(map?.id || 0) !== -1}
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
