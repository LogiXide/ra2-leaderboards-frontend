import { DataList } from '@/components/common';

const list = [
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

const columns = [
  {
    id: 1,
    label: 'Rank',
    render: (x: any) => x.rank,
  },
  {
    id: 2,
    label: 'Player',
    render: (x: any) => x.player,
  },
  {
    id: 3,
    label: 'Elo',
    render: (x: any) => x.elo,
  },
  {
    id: 4,
    label: 'Country',
    render: (x: any) => x.country,
  },
];

const Stats: React.FC = (): JSX.Element => {
  return <DataList list={list} columns={columns} />;
};

export default Stats;
