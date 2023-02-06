import { TableCell } from '@mui/material';

export interface ITypeDataColumn {
  id: number;
  label: string;
  render: (x: any) => any;
}

interface ITypeProps {
  label: string;
}

const DataColumn: React.FC<ITypeProps> = (props): JSX.Element => {
  return <TableCell>{props.label}</TableCell>;
};

export { DataColumn };
