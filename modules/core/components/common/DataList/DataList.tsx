import { Table, TableHead, TableBody, TableRow } from '@mui/material';

import { DataColumn, DataItem } from '@/modules/core/components/common';

import type { ITypeDataColumn } from '@/modules/core/components/common/DataColumn';

interface ITypeProps<T> {
  columns: ITypeDataColumn[];
  list: T[];
}

const DataList = <T,>(props: ITypeProps<T>) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {(props.columns || []).map((column) => (
            <DataColumn key={column.id} label={column.label} />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {(props.list || []).map((item: any) => (
          <TableRow key={item.id}>
            {(props.columns || []).map((column) => (
              <DataItem
                key={`${item.id}-${column.id}`}
                content={column.render(item)}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { DataList };
