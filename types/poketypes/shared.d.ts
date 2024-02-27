export interface PageItem {
  name?: string,
  url?: string,
}

export interface Page {
  count: number,
  next?: string,
  previous?: string,
  results?: PageItem[],
}

export interface Internationalized {
  language: PageItem,
}

export interface Language {
  name: string,
  language: PageItem,
}

export interface Item {
  id: number,
  name: string,
}

export interface NamedItem extends Item {
  names: Language[],
}
