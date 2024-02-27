import type { NamedItem, PageItem } from './shared';

export interface ServerDamageRelation {
  double_damage_from: PageItem[],
  double_damage_to: PageItem[],
  half_damage_from: PageItem[],
  half_damage_to: PageItem[],
  no_damage_from: PageItem[],
  no_damage_to: PageItem[],
}

export interface ServerTypePokemon {
  pokemon: PageItem,
  slot: number,
}

export interface ServerType extends NamedItem {
  damage_relations: ServerDamageRelation,
  generation: PageItem,
  move_damage_class: PageItem,
  moves: PageItem[],
  pokemon: ServerTypePokemon[],
}
