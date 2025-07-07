
// Civilizations
export interface UniqueUnit {
  name: string;
  image: string;
  description: string;
}

export interface UniqueTech {
  name: string;
  age: 'Castillos' | 'Imperial';
  description: string;
}

export interface Civilization {
  id: string;
  name: string;
  shield: string;
  playstyle: string;
  bonuses: string[];
  uniqueUnit: UniqueUnit;
  uniqueTechs: UniqueTech[];
  teamBonus: string;
}

// Units
export interface UnitStats {
  hp: number;
  attack: number;
  meleeArmor: number;
  pierceArmor: number;
  range: number;
  speed: number;
}

export interface Unit {
  name: string;
  image: string;
  baseStats: UnitStats;
  maxStats: UnitStats;
}

export interface UnitLine {
  id: string;
  name: string;
  units: Unit[];
}

// Structures
export type StructureCategory = 'Edificios Económicos' | 'Edificios Militares' | 'Edificios Defensivos' | 'Edificios Tecnológicos';

export interface Structure {
    id: string;
    name: string;
    image: string;
    category: StructureCategory;
    stats: {
        hp: { base: number, max: number };
        meleeArmor: number;
        pierceArmor: number;
        attack?: number;
        range?: number;
        garrison: number;
    };
    function: string;
    trainableUnits: string[];
    researchableTechs: string[];
}
