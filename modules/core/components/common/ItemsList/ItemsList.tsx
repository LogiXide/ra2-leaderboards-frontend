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

export type ItemType = {
  id: number;
  name: string;
  checked: boolean;
};

type PropsType = {
  title: string;
  searchQuery: string;
  items: ItemType[];
  onChecked: (item: ItemType, checked: boolean) => void;
  onSearch: (query: string) => void;
};

export const ItemsList: React.FC<PropsType> = (props) => {
  const { title, searchQuery, items, onChecked, onSearch } = props;

  return (
    <Box
      flexGrow={1}
      sx={{ border: '1px solid grey', maxWidth: '550px', width: '100%' }}
      padding={2}
    >
      <Typography textAlign="left" component="h6" variant="h6" mb={2}>
        {title}
      </Typography>

      <TextField
        fullWidth
        size="small"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSearch(e.target.value);
        }}
      />

      <List
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'auto',
          height: 400,
          mt: 1,
        }}
      >
        {items.map((item: ItemType) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => {
                onChecked(item, item.checked);
              }}
            >
              <ListItemIcon>
                <Checkbox edge="start" checked={item.checked} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
