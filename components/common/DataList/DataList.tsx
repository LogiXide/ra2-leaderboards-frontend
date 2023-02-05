import { Table, TableHead, TableBody, TableRow, Box } from '@mui/material';

import { DataColumn, DataItem } from '@/components/common';

import styles from './DataList.module.css';

import { ITypeDataColumn, ITypeDataList } from '@/interfaces';

interface ITypeProps {
  columns: ITypeDataColumn[];
  list: ITypeDataList[];
}

const DataList: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <Box p={2}>
      <Table>
        <TableHead>
          <TableRow>
            {(props.columns || []).map((x) => (
              <DataColumn key={x.id} label={x.label} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(props.list || []).map((item) => (
            <TableRow key={item.id}>
              {(props.columns || []).map((x) => (
                <DataItem key={x.id} content={x.render(item)} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export { DataList };
