import {
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@mui/material';

import { DataColumn, DataItem } from '@/components/common';

import styles from './DataList.module.css';

import type { ITypeDataColumn, ITypeDataList } from '@/pages/stats';

interface ITypeProps {
  columns: ITypeDataColumn[];
  list: ITypeDataList[];
}
 
const DataList: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <div className={styles.root}>
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
    </div>
  );
};

export { DataList };
