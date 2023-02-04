import { TableCell } from '@mui/material';

interface ITypeProps {
  label: string;
}

const DataColumn: React.FC<ITypeProps> = (props): JSX.Element => {
  return <TableCell>{props.label}</TableCell>;
};

export { DataColumn };
