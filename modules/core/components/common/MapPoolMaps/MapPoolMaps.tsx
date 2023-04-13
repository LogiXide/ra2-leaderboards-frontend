import { useState, useMemo, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import Stack from '@mui/material/Stack';

import { ControllerRenderProps } from 'react-hook-form';

import { SEARCH_MAP } from '@/modules/maps/api/maps';

import { ItemList } from '../ItemList';

import type { Map } from '@/generated/graphql';

type FieldType = {
  id: number;
  name: string;
  checked: boolean;
};

type PropsType = {
  fields: FieldType[];
  onChecked: (field: FieldType) => void;
  onSelect: (field: FieldType) => void;
} & ControllerRenderProps;

const MapPoolMaps: React.FC<PropsType> = (props) => {
  const { onChecked, onSelect, fields, ...field } = props;

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

  const compareFields = useCallback(() => {
    const fieldName: string[] = [];

    field.value.forEach((field: any) => {
      fieldName.push(field.name);
    });

    return fieldName;
  }, [field.value]);

  console.log(compareFields());

  const availableFields = useMemo(() => {
    const result: FieldType[] = [];

    const arrayNames = compareFields();

    data?.maps?.data.forEach((map: Map) => {
      const checked: boolean = arrayNames.includes(map.name);

      const newObj = {
        id: map.id,
        name: map.name,
        checked: checked,
      };

      result.push(newObj);
    });

    return result;
  }, [data?.maps.data, compareFields]);

  const selectedFields = useMemo(() => {
    if (searchSelectedField) {
      return fields.filter((field) =>
        field.name.startsWith(searchSelectedField)
      );
    }

    return fields;
  }, [searchSelectedField, fields]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      spacing={5}
      mt={5}
    >
      <ItemList
        title="Available Maps"
        fields={availableFields}
        query={searchAvailableField}
        onSearch={setSearchAvailableField}
        onChecked={onSelect}
      />

      <ItemList
        title="Selected Maps"
        fields={selectedFields}
        query={searchSelectedField}
        onSearch={setSearchSelectedField}
        onChecked={onChecked}
      />
    </Stack>
  );
};

export { MapPoolMaps };
