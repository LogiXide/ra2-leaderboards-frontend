import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/client';

import Stack from '@mui/material/Stack';

import { ItemsList } from '@/modules/core/components/common';
import { SEARCH_PLAYER } from '@/modules/players/api/players';

import { ItemType } from '@/modules/core/components/common';

type PropsType = {
  items: ItemType[];
  onChecked: (item: ItemType, checked: boolean) => void;
};

const TeamPlayers: React.FC<PropsType> = (props) => {
  const { items, onChecked } = props;

  const [searchAvailableField, setSearchAvailableField] = useState<string>('');
  const [searchSelectedField, setSearchSelectedField] = useState<string>('');

  const { data } = useQuery(SEARCH_PLAYER, {
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
    const mySet = new Set<number>();

    items.forEach((it) => {
      mySet.add(it.id);
    });

    const fields =
      data?.players.data.map((it: any) => ({
        id: it.id,
        name: it.name,
        checked: mySet.has(it.id),
      })) || [];

    return fields;
  }, [data?.players.data, items]);

  const selectedFields = useMemo(() => {
    if (searchSelectedField) {
      return items.filter((item) =>
        item.name.toLowerCase().startsWith(searchSelectedField.toLowerCase())
      );
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
        title="Available Players"
        items={availableFields}
        searchQuery={searchAvailableField}
        onSearch={setSearchAvailableField}
        onChecked={onChecked}
      />

      <ItemsList
        title="Selected Players"
        items={selectedFields}
        searchQuery={searchSelectedField}
        onSearch={setSearchSelectedField}
        onChecked={onChecked}
      />
    </Stack>
  );
};

export { TeamPlayers };
