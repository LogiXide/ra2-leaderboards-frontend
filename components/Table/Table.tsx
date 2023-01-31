import {
  TableCell,
  Table,
  TableBody,
  TableRow,
  TableContainer,
  TableHead,
  Container,
  Paper,
  Typography,
} from '@mui/material';

const dataCommands = [
  { rank: 1, rating: 1212, name: 'Navy', country: 'Russia' },
  { rank: 2, rating: 1231, name: 'Virtus Pro', country: 'Kazakhstan' },
  { rank: 3, rating: 1413, name: 'Simple games', country: 'Ukraine' },
  { rank: 4, rating: 999, name: 'Good command', country: 'Belarus' },
  { rank: 5, rating: 555, name: 'Nobs', country: 'Turkey' },
];

const TableExample: React.FC = (): JSX.Element => {
  return (
    <Container
      sx={{
        paddingTop: '200px',
      }}
    >
      <TableContainer
        sx={{ maxWidth: 700, margin: '0 auto' }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableCell align="left">
              <Typography variant="h6">Rank</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Rating</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6">Country</Typography>
            </TableCell>
          </TableHead>
          <TableBody
            sx={{
              '& tr:nth-of-type(2n+1)': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            {dataCommands.map((command) => (
              <TableRow key={command.name}>
                <TableCell>{command.rank}</TableCell>
                <TableCell>{command.rating}</TableCell>
                <TableCell>{command.name}</TableCell>
                <TableCell>{command.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableExample;
