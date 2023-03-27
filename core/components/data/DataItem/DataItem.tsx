import { TableCell } from '@mui/material';

type PropsType = {
  content: string | number | React.ReactNode;
};

const DataItem: React.FC<PropsType> = (props) => {
  return <TableCell>{props.content}</TableCell>;
};

export { DataItem };
