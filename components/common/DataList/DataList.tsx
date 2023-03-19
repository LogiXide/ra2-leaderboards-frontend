import { Table, TableHead, TableBody, TableRow } from '@mui/material';

import { DataColumn, DataItem } from '@/components/common';

import type { ITypeDataColumn } from '@/components/common/DataColumn';

interface ITypeProps<T> {
  columns: ITypeDataColumn[];
  list: T[];
  path?: string;
}

const DataList = <T,>(props: ITypeProps<T>) => {
  return (
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
              <DataItem
                path={props.path || ''}
                key={x.id}
                id={item.id}
                content={x.render(item)}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { DataList };
