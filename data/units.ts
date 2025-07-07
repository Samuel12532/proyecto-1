import type { UnitLine } from '../types';

export const unitLinesData: UnitLine[] = [
    {
        id: 'civilian_units',
        name: 'Unidades Civiles',
        units: [
            {
                name: 'Aldeano',
                image: 'https://picsum.photos/seed/villager/200/200',
                baseStats: { hp: 25, attack: 3, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.8 },
                maxStats: { hp: 40, attack: 6, meleeArmor: 3, pierceArmor: 3, range: 0, speed: 0.8 },
            },
            {
                name: 'Rey',
                image: 'https://picsum.photos/seed/king/200/200',
                baseStats: { hp: 75, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.32 },
                maxStats: { hp: 75, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.32 },
            },
        ]
    },
    {
        id: 'barracks_units',
        name: 'Unidades de Cuartel',
        units: [
            {
                name: 'Milicia',
                image: 'https://picsum.photos/seed/militia_new/200/200',
                baseStats: { hp: 40, attack: 4, meleeArmor: 0, pierceArmor: 1, range: 0, speed: 0.9 },
                maxStats: { hp: 40, attack: 8, meleeArmor: 3, pierceArmor: 4, range: 0, speed: 0.9 },
            },
            {
                name: 'Lancero',
                image: 'https://picsum.photos/seed/spearman/200/200',
                baseStats: { hp: 45, attack: 3, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.0 },
                maxStats: { hp: 60, attack: 7, meleeArmor: 4, pierceArmor: 5, range: 0, speed: 1.0 },
            },
        ]
    },
    {
        id: 'archery_range_units',
        name: 'Unidades de Galería',
        units: [
            {
                name: 'Arquero',
                image: 'https://picsum.photos/seed/archer_new/200/200',
                baseStats: { hp: 30, attack: 4, meleeArmor: 0, pierceArmor: 0, range: 4, speed: 0.96 },
                maxStats: { hp: 40, attack: 8, meleeArmor: 4, pierceArmor: 5, range: 8, speed: 0.96 },
            },
            {
                name: 'Guerrillero',
                image: 'https://picsum.photos/seed/skirmisher/200/200',
                baseStats: { hp: 30, attack: 2, meleeArmor: 0, pierceArmor: 3, range: 4, speed: 0.96 },
                maxStats: { hp: 35, attack: 6, meleeArmor: 4, pierceArmor: 8, range: 7, speed: 0.96 },
            },
            {
                name: 'Arquero a Caballo',
                image: 'https://picsum.photos/seed/cavalryarcher/200/200',
                baseStats: { hp: 50, attack: 6, meleeArmor: 0, pierceArmor: 0, range: 4, speed: 1.4 },
                maxStats: { hp: 60, attack: 10, meleeArmor: 4, pierceArmor: 6, range: 7, speed: 1.4 },
            },
            {
                name: 'Cañonero Manual',
                image: 'https://picsum.photos/seed/handcannoneer/200/200',
                baseStats: { hp: 35, attack: 17, meleeArmor: 1, pierceArmor: 0, range: 7, speed: 0.96 },
                maxStats: { hp: 35, attack: 21, meleeArmor: 5, pierceArmor: 5, range: 7, speed: 0.96 },
            },
        ]
    },
    {
        id: 'stable_units',
        name: 'Unidades de Establo',
        units: [
            {
                name: 'Explorador de Caballería',
                image: 'https://picsum.photos/seed/scoutcavalry/200/200',
                baseStats: { hp: 45, attack: 3, meleeArmor: 0, pierceArmor: 2, range: 0, speed: 1.2 },
                maxStats: { hp: 60, attack: 9, meleeArmor: 4, pierceArmor: 6, range: 0, speed: 1.55 },
            },
            {
                name: 'Caballero',
                image: 'https://picsum.photos/seed/knight/200/200',
                baseStats: { hp: 100, attack: 10, meleeArmor: 2, pierceArmor: 2, range: 0, speed: 1.35 },
                maxStats: { hp: 160, attack: 18, meleeArmor: 6, pierceArmor: 7, range: 0, speed: 1.35 },
            },
            {
                name: 'Camello',
                image: 'https://picsum.photos/seed/camel/200/200',
                baseStats: { hp: 100, attack: 5, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.45 },
                maxStats: { hp: 140, attack: 11, meleeArmor: 4, pierceArmor: 5, range: 0, speed: 1.45 },
            },
        ]
    },
    {
        id: 'siege_workshop_units',
        name: 'Unidades de Asedio',
        units: [
            {
                name: 'Ariete',
                image: 'https://picsum.photos/seed/batteringham/200/200',
                baseStats: { hp: 175, attack: 2, meleeArmor: -3, pierceArmor: 180, range: 0, speed: 0.6 },
                maxStats: { hp: 270, attack: 4, meleeArmor: 0, pierceArmor: 190, range: 0, speed: 0.6 },
            },
            {
                name: 'Mangonel',
                image: 'https://picsum.photos/seed/mangonel/200/200',
                baseStats: { hp: 50, attack: 40, meleeArmor: 0, pierceArmor: 6, range: 7, speed: 0.65 },
                maxStats: { hp: 70, attack: 75, meleeArmor: 2, pierceArmor: 8, range: 9, speed: 0.65 },
            },
            {
                name: 'Escorpión',
                image: 'https://picsum.photos/seed/scorpion/200/200',
                baseStats: { hp: 40, attack: 12, meleeArmor: 0, pierceArmor: 7, range: 7, speed: 0.65 },
                maxStats: { hp: 50, attack: 16, meleeArmor: 2, pierceArmor: 8, range: 8, speed: 0.65 },
            },
            {
                name: 'Torre de Asedio',
                image: 'https://picsum.photos/seed/siegetower/200/200',
                baseStats: { hp: 200, attack: 0, meleeArmor: -2, pierceArmor: 100, range: 0, speed: 0.5 },
                maxStats: { hp: 200, attack: 0, meleeArmor: 0, pierceArmor: 100, range: 0, speed: 0.5 },
            },
            {
                name: 'Cañón de Asedio',
                image: 'https://picsum.photos/seed/bombardcannon/200/200',
                baseStats: { hp: 80, attack: 40, meleeArmor: 2, pierceArmor: 5, range: 12, speed: 0.7 },
                maxStats: { hp: 80, attack: 40, meleeArmor: 4, pierceArmor: 6, range: 12, speed: 0.7 },
            },
        ]
    },
    {
        id: 'monastery_units',
        name: 'Unidades de Monasterio',
        units: [
            {
                name: 'Monje',
                image: 'https://picsum.photos/seed/monk/200/200',
                baseStats: { hp: 30, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 9, speed: 0.7 },
                maxStats: { hp: 45, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 12, speed: 0.7 },
            },
        ]
    },
    {
        id: 'dock_units',
        name: 'Unidades de Muelle',
        units: [
            {
                name: 'Barco Pesquero',
                image: 'https://picsum.photos/seed/fishingboat/200/200',
                baseStats: { hp: 60, attack: 0, meleeArmor: 0, pierceArmor: 4, range: 0, speed: 1.26 },
                maxStats: { hp: 60, attack: 0, meleeArmor: 2, pierceArmor: 6, range: 0, speed: 1.26 },
            },
            {
                name: 'Barco Mercante',
                image: 'https://picsum.photos/seed/tradecog/200/200',
                baseStats: { hp: 80, attack: 0, meleeArmor: 0, pierceArmor: 6, range: 0, speed: 1.32 },
                maxStats: { hp: 80, attack: 0, meleeArmor: 2, pierceArmor: 8, range: 0, speed: 1.32 },
            },
            {
                name: 'Barco de Transporte',
                image: 'https://picsum.photos/seed/transportship/200/200',
                baseStats: { hp: 100, attack: 0, meleeArmor: 4, pierceArmor: 8, range: 0, speed: 1.43 },
                maxStats: { hp: 100, attack: 0, meleeArmor: 6, pierceArmor: 10, range: 0, speed: 1.43 },
            },
            {
                name: 'Galera',
                image: 'https://picsum.photos/seed/galley/200/200',
                baseStats: { hp: 120, attack: 6, meleeArmor: 0, pierceArmor: 6, range: 5, speed: 1.43 },
                maxStats: { hp: 165, attack: 9, meleeArmor: 2, pierceArmor: 10, range: 8, speed: 1.43 },
            },
            {
                name: 'Barco de Demolición',
                image: 'https://picsum.photos/seed/demoship/200/200',
                baseStats: { hp: 50, attack: 110, meleeArmor: 0, pierceArmor: 3, range: 0, speed: 1.54 },
                maxStats: { hp: 72, attack: 160, meleeArmor: 2, pierceArmor: 5, range: 0, speed: 1.54 },
            },
            {
                name: 'Barco de Fuego',
                image: 'https://picsum.photos/seed/fireship/200/200',
                baseStats: { hp: 100, attack: 2, meleeArmor: 0, pierceArmor: 6, range: 2.49, speed: 1.375 },
                maxStats: { hp: 140, attack: 3, meleeArmor: 2, pierceArmor: 8, range: 2.49, speed: 1.375 },
            },
            {
                name: 'Galeón con Cañón',
                image: 'https://picsum.photos/seed/cannongalleon/200/200',
                baseStats: { hp: 120, attack: 35, meleeArmor: 0, pierceArmor: 6, range: 13, speed: 1.1 },
                maxStats: { hp: 150, attack: 45, meleeArmor: 2, pierceArmor: 8, range: 15, speed: 1.1 },
            },
        ]
    },
    {
        id: 'gaia_units',
        name: 'Fauna (Gaia)',
        units: [
            { name: 'Oveja', image: 'https://picsum.photos/seed/sheep/200/200', baseStats: { hp: 7, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 }, maxStats: { hp: 7, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 } },
            { name: 'Jabalí', image: 'https://picsum.photos/seed/boar/200/200', baseStats: { hp: 75, attack: 7, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.9 }, maxStats: { hp: 75, attack: 7, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.9 } },
            { name: 'Ciervo', image: 'https://picsum.photos/seed/deer/200/200', baseStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 }, maxStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 } },
            { name: 'Cabra', image: 'https://picsum.photos/seed/goat/200/200', baseStats: { hp: 7, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 }, maxStats: { hp: 7, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 } },
            { name: 'Vaca', image: 'https://picsum.photos/seed/cow/200/200', baseStats: { hp: 10, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 }, maxStats: { hp: 10, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 0.7 } },
            { name: 'Caballo', image: 'https://picsum.photos/seed/horse/200/200', baseStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.5 }, maxStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.5 } },
            { name: 'Llama', image: 'https://picsum.photos/seed/llama/200/200', baseStats: { hp: 10, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.1 }, maxStats: { hp: 10, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.1 } },
            { name: 'Cebra', image: 'https://picsum.photos/seed/zebra/200/200', baseStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 }, maxStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 } },
            { name: 'Avestruz', image: 'https://picsum.photos/seed/ostrich/200/200', baseStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 }, maxStats: { hp: 5, attack: 0, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.4 } },
            { name: 'Lobo', image: 'https://picsum.photos/seed/wolf/200/200', baseStats: { hp: 25, attack: 3, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.05 }, maxStats: { hp: 25, attack: 3, meleeArmor: 0, pierceArmor: 0, range: 0, speed: 1.05 } },
        ]
    }
];
