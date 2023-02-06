import { Table, TableHead, TableBody, TableRow, Box } from '@mui/material';

import { DataColumn, DataItem } from '@/components/common';

import type { ITypeDataColumn } from '@/components/common/DataColumn';

interface ITypeProps<T> {
  columns: ITypeDataColumn<any>[];
  list: T[];
}

const DataList = <T,>(props: ITypeProps<T>): JSX.Element => {
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
          {(props.list || []).map((item: any) => (
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
