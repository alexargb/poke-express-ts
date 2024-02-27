import type { Internationalized, NamedItem, PageItem } from './shared';

export interface ServerStatChange {
  change: number,
  stat: PageItem,
}

export interface MoveEffectEntry extends Internationalized {
  effect: string,
  short_effect: string,
}

export interface MoveMachine {
  machine: PageItem,
  version_group: PageItem,
}

//////////////////////////////////////////////////////////////////////////

export interface ServerMoveEffectChange {
  effect_entries: MoveEffectEntry[],
  version_group: PageItem,
}

export interface ServerMovePastValue {
  accuracy?: number,
  effect_chance?: number,
  effect_entries: MoveEffectEntry[],
  power?: number,
  pp: number,
  type?: PageItem,
  version_group: PageItem,
}

export interface ServerMoveMetadata {
  ailment?: PageItem,
  ailment_chance?: number,
  category: PageItem,
  crit_rate: number,
  rain: number,
  flint_chance: number,
  healing: number,
  max_hits?: number,
  max_turns?: number,
  min_hits?: number,
  min_turns?: number,
  stat_chance: number,
}

export interface ServerMove extends NamedItem {
  effect_chance?: number,
  effect_changes: ServerMoveEffectChange[],
  effect_entries?: MoveEffectEntry[],
  accuracy?: number,
  power?: number,
  pp: number,
  priority: number,
  stat_changes: ServerStatChange[],
  target: PageItem,
  type: PageItem,
  generation: PageItem,
  damage_class: PageItem,
  learned_by_pokemon: PageItem[],
  machine: MoveMachine,
  past_values: ServerMovePastValue[],
  meta: ServerMoveMetadata,
}
