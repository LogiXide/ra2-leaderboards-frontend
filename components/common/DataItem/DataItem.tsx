import Link from 'next/link';
import { TableCell } from '@mui/material';

interface ITypeProps {
  content: string | number | React.ReactNode;
  path: string;
  id: number;
}

const DataItem: React.FC<ITypeProps> = (props) => {
  return (
    <TableCell>
      <Link href={`/${props.path}/${props.id}`}>{props.content}</Link>
    </TableCell>
  );
};

export { DataItem };
