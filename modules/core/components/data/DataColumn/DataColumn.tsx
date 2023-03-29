import { TableCell } from '@mui/material';

type DataColumnType = {
  id: number;
  label: string;
  render: (x: any) => number | string | React.ReactNode;
};

type PropsType = {
  label: string;
};

const DataColumn: React.FC<PropsType> = (props) => {
  return <TableCell>{props.label}</TableCell>;
};

export { DataColumn, type DataColumnType };
