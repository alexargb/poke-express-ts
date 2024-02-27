import type { NamedItem, PageItem } from './shared';

export interface ServerRegion extends NamedItem {
  main_generation: PageItem,
  version_groups: PageItem[],
}
