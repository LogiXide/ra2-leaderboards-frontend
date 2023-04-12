import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

type PropsType = {
  title: string;
  query: string;
  fields: { id: number; name: string; checked: boolean }[];
  onChecked: (id: number) => void;
  onSearch: (query: string) => void;
};

export const ItemList: React.FC<PropsType> = (props) => {
  const { title, fields, query, onSearch, onChecked } = props;

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleCheckedField = (id: number) => {
    onChecked(id);
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

      <TextField
        fullWidth
        size="small"
        value={query}
        onChange={handleChangeQuery}
      />

      <List
        sx={{
          width: '100%',
          position: 'relative',
          overflow: 'auto',
          height: 400,
          mt: '10px',
        }}
      >
        {fields?.map((it) => (
          <ListItem key={it?.id} disablePadding>
            <ListItemButton onClick={() => handleCheckedField(it.id)}>
              <ListItemIcon>
                <Checkbox edge="start" checked={it.checked} />
              </ListItemIcon>
              <ListItemText primary={it?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
