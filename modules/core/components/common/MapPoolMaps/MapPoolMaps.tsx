import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/client';

import Stack from '@mui/material/Stack';

import { ItemsList } from '@/modules/core/components/common';
import { SEARCH_MAP } from '@/modules/maps/api/maps';

import { ItemType } from '@/modules/core/components/common';

type PropsType = {
  items: ItemType[];
  onChecked: (item: ItemType, checked: boolean) => void;
};

const MapPoolMaps: React.FC<PropsType> = (props) => {
  const { items, onChecked } = props;

  const [searchAvailableField, setSearchAvailableField] = useState<string>('');
  const [searchSelectedField, setSearchSelectedField] = useState<string>('');

  const { data } = useQuery(SEARCH_MAP, {
    variables: {
      where: {
        name_STARTS_WITH: searchAvailableField,
      },
      options: {
        limit: 50,
      },
    },
  });

  const availableFields = useMemo(() => {
    const fields =
      data?.maps?.data.map((it: ItemType) => ({
        id: it.id,
        name: it.name,
        checked: false,
      })) || [];

    const newItems = items.map((it: ItemType) => ({
      id: it.id,
      name: it.name,
      checked: true,
    }));

    const keyedItems = fields.reduce(
      (acc: Map<number, ItemType>, item: ItemType) =>
        acc.set(item.id, { ...item }),
      new Map()
    );

    for (const item of newItems) {
      const originalItem = keyedItems.get(item.id);
      if (originalItem) {
        originalItem.checked = item.checked;
      }
    }

    const newFields = [...keyedItems.values()];

    return newFields;
  }, [data?.maps.data, items]);

  const selectedFields = useMemo(() => {
    if (searchSelectedField) {
      return items.filter((item) => item.name.startsWith(searchSelectedField));
    }

    return items;
  }, [searchSelectedField, items]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      spacing={5}
      mt={5}
    >
      <ItemsList
        title="Available Maps"
        items={availableFields}
        query={searchAvailableField}
        onSearch={setSearchAvailableField}
        onChecked={onChecked}
      />

      <ItemsList
        title="Selected Maps"
        items={selectedFields}
        query={searchSelectedField}
        onSearch={setSearchSelectedField}
        onChecked={onChecked}
      />
    </Stack>
  );
};

export { MapPoolMaps };
