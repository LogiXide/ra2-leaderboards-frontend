import Link from 'next/link';
import { TableCell } from '@mui/material';

interface ITypeProps {
  content: string | number | React.ReactNode;
}

const DataItem: React.FC<ITypeProps> = (props) => {
  return <TableCell>{props.content}</TableCell>;
};

export { DataItem };
