interface ITypeDataColumn {
  id: number;
  label: string;
  render: (x: ITypeDataList) => string | number;
}

interface ITypeDataList {
  id: number;
  rank: number;
  player: string;
  elo: number;
  country: string;
}

export type { ITypeDataColumn, ITypeDataList };
