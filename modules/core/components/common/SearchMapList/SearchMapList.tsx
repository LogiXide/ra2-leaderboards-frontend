import { useState } from 'react';
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

import { SearchMapDocument, SearchMapQuery } from '@/generated/graphql';


const SearchMapList: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [checked, setChecked] = useState<number[]>([0]);

  const { data } = useQuery<SearchMapQuery>(SearchMapDocument, {
    variables: {
      where: {
        name_STARTS_WITH: searchText,
      },
      options: {
        limit: 50,
      },
    },
  });

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Box flexGrow={1} sx={{ border: '1px solid grey' }} padding={2}>
      <Typography textAlign="left" component="h6" variant="h6" mb={2}>
        Available Maps
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
        {data?.maps.data.map((map) => (
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

export { SearchMapList };
