type ItemType = {
  id: number;
  name: string;
};

const convertDataToFields = (data: ItemType[]) => {
  return data.map((it: ItemType) => ({
    id: it.id,
    name: it.name,
    checked: true,
  }));
};

export { convertDataToFields };
