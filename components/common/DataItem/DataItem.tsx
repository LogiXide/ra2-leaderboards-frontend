import { TableCell } from '@mui/material';

interface ITypeProps {
  content: string | number | React.ReactNode;
}

const DataItem: React.FC<ITypeProps> = (props): JSX.Element => {
  return <TableCell>{props.content}</TableCell>;
};

export { DataItem };
