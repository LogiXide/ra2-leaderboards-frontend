import { TableCell } from '@mui/material';

export type TypeDataColumn = {
  id: number;
  label: string;
  render: (x: any) => number | string | React.ReactNode;
};

type TypeProps = {
  label: string;
};

const DataColumn: React.FC<TypeProps> = (props) => {
  return <TableCell>{props.label}</TableCell>;
};

export { DataColumn };
