import type { Item, NamedItem, PageItem } from './shared';

export interface ServerVersionGroup extends Item {
  generation: PageItem,
  regions: PageItem[],
  versions: PageItem[],
}

export interface ServerVersion extends NamedItem {
  version_group: PageItem,
}
