import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

type ItemType = {
  id: number;
  name: string;
  checked: boolean;
};

type PropsType = {
  title: string;
  query: string;
  items: ItemType[];
  onChecked: (item: ItemType, checked: boolean) => void;
  onSearch: (query: string) => void;
};

export const ItemsList: React.FC<PropsType> = (props) => {
  const { title, query, items, onChecked, onSearch } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Box
      flexGrow={1}
      sx={{ border: '1px solid grey', maxWidth: '550px', width: '100%' }}
      padding={2}
    >
      <Typography textAlign="left" component="h6" variant="h6" mb={2}>
        {title}
      </Typography>

      <TextField fullWidth size="small" value={query} onChange={handleChange} />

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
