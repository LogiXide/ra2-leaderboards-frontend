import { DataList } from '@/components/common';

export interface ITypeDataColumn {
  id: number;
  label: string;
  render: (x: ITypeDataList) => string | number;
}

export interface ITypeDataList {
  id: number;
  rank: number;
  player: string;
  elo: number;
  country: string;
}

const list: ITypeDataList[] = [
  {
    id: 1,
    rank: 1,
    player: 'Dude01',
    elo: 2603,
    country: 'Russia',
  },
  {
    id: 2,
    rank: 10,
    player: 'Virtus.pro',
    elo: 1111,
    country: 'Kazakhstan',
  },
  {
    id: 3,
    rank: 4,
    player: 'Noop',
    elo: 942,
    country: 'Belarus',
  },
  {
    id: 4,
    rank: 5,
    player: 'Gamer',
    elo: 942,
    country: 'Moldova',
  },
];

const columns: ITypeDataColumn[] = [
  {
    id: 1,
    label: 'Rank',
    render: (x) => x.rank,
  },
  {
    id: 2,
    label: 'Player',
    render: (x) => x.player,
  },
  {
    id: 3,
    label: 'Elo',
    render: (x) => x.elo,
  },
  {
    id: 4,
    label: 'Country',
    render: (x) => x.country,
  },
];

const Stats: React.FC = (): JSX.Element => {
  return <DataList list={list} columns={columns} />;
};

export default Stats;
