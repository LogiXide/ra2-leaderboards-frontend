import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

type FieldType = {
  id: number;
  name: string;
  checked: boolean;
};

type PropsType = {
  title: string;
  query: string;
  fields: FieldType[];
  onChecked: (field: FieldType) => void;
  onSearch: (query: string) => void;
};

export const ItemList: React.FC<PropsType> = (props) => {
  const { title, query, fields, onChecked, onSearch } = props;

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
          mt: '10px',
        }}
      >
        {fields.map((field: FieldType) => (
          <ListItem key={field.id} disablePadding>
            <ListItemButton
              onClick={() => {
                onChecked(field);
              }}
            >
              <ListItemIcon>
                <Checkbox edge="start" checked={field.checked} />
              </ListItemIcon>
              <ListItemText primary={field.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
