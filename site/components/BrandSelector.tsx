"use client";

import { FilterCombobox, type FilterOption } from "./FilterCombobox";

interface Props {
  brands: FilterOption[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

export function BrandSelector({ brands, selected, onSelect }: Props) {
  return (
    <FilterCombobox
      filterLabel="Brand"
      options={brands}
      selected={selected}
      onSelect={onSelect}
    />
  );
}
