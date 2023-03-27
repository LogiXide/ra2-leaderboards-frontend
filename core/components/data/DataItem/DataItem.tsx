import { TableCell } from '@mui/material';

type TypeProps = {
  content: string | number | React.ReactNode;
};

const DataItem: React.FC<TypeProps> = (props) => {
  return <TableCell>{props.content}</TableCell>;
};

export { DataItem };
