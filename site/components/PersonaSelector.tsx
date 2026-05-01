"use client";

import { FilterCombobox, type FilterOption } from "./FilterCombobox";

interface Props {
  personas: FilterOption[];
  selected: string | null;
  onSelect: (slug: string | null) => void;
}

// Persona filter on the audit list. Same combobox UI as BrandSelector
// (the persona roster grew past the point where flat pills made sense
// once Ivy/Ian/Ida/Ike + 50 retailer personas joined Walker/Martha/
// Calvin). HomeContent shapes the FilterOption list with persona name
// + audit count.
export function PersonaSelector({ personas, selected, onSelect }: Props) {
  return (
    <FilterCombobox
      filterLabel="Persona"
      options={personas}
      selected={selected}
      onSelect={onSelect}
    />
  );
}
