import { Table, TableHead, TableBody, TableRow } from '@mui/material';

import { DataColumn, DataItem, TypeDataColumn } from '@/modules/core/components/data';

type PropsType<T> = {
  columns: TypeDataColumn[];
  list: T[];
};

const DataList = <T,>(props: PropsType<T>) => {
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
