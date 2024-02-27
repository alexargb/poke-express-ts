import type { Item, PageItem } from './shared';

export interface ServerGeneration extends Item {
  main_region: PageItem,
  types: PageItem[],
  version_groups: PageItem[],
  pokemon_species: PageItem[],
}
