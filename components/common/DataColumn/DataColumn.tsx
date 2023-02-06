import { TableCell } from '@mui/material';

export interface ITypeDataColumn<T> {
  id: number;
  label: string;
  render: (x: T) => void;
}

interface ITypeProps {
  label: string;
}

const DataColumn: React.FC<ITypeProps> = (props): JSX.Element => {
  return <TableCell>{props.label}</TableCell>;
};

export { DataColumn };
