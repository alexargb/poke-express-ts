import type { NamedItem, PageItem } from './shared';

export interface PokemonSpritesBase {
  back_default?: string,
  back_female?: string,
  back_shiny?: string,
  back_shiny_female?: string,
  front_default?: string,
  front_female?: string,
  front_shiny?: string,
  front_shiny_female?: string,
}

export type PokemonSpritesVersions = Map<string, Map<string, PokemonSpritesBase>>;

export interface PokemonSprites extends PokemonSpritesBase {
  versions: PokemonSpritesVersions,
}

//////////////////////////////////////////////////////////////////////////

export interface ServerPokemonType {
  type: PageItem,
  slot: number,
}

export interface ServerPokemonAbility {
  ability: PageItem,
  is_hidden: boolean,
  slot: number,
}

export interface ServerPokemonStat {
  base_stat: number,
  effort: number,
  stat: PageItem,
}

export interface ServerPokemon extends NamedItem {
  abilities: ServerPokemonAbility[],
  past_abilities: ServerPokemonAbility[],
  base_experience: number,
  order: number,
  height: number, // decimeters?????
  is_default: boolean,
  species: PageItem,
  sprites: PokemonSprites,
  weight: number,
  types: ServerPokemonType[],
  past_types: ServerPokemonType[],
}
