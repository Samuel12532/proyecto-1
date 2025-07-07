
import React, { useState } from 'react';
import TwoColumnLayout from '../components/TwoColumnLayout';
import { unitLinesData } from '../data/units';
import type { UnitLine, UnitStats } from '../types';

const StatRow: React.FC<{ label: string, base: number | string, max: number | string }> = ({ label, base, max }) => (
    <div className="flex justify-between text-sm py-1 border-b border-gray-700">
        <span className="font-semibold text-gray-300">{label}</span>
        <div className="text-right">
            <span className="text-gray-200 mr-4">{base}</span>
            <span className="text-aoe-gold">{max}</span>
        </div>
    </div>
);

const UnitCard: React.FC<{ unit: import('../types').Unit }> = ({ unit }) => (
    <div className="bg-black/20 p-4 rounded-lg border border-gray-700">
        <div className="flex items-center gap-4 mb-3">
            <img src={unit.image} alt={unit.name} className="w-20 h-20 rounded-md object-cover"/>
            <h4 className="text-2xl font-serif font-bold text-aoe-blue">{unit.name}</h4>
        </div>
        <div className="flex justify-between text-sm font-bold text-gray-400 mb-1 px-1">
            <span>Estadísticas</span>
            <div>
                <span className="mr-4">Base</span>
                <span>Max</span>
            </div>
        </div>
        <div className="space-y-1">
            <StatRow label="Vida (HP)" base={unit.baseStats.hp} max={unit.maxStats.hp} />
            <StatRow label="Ataque" base={unit.baseStats.attack} max={unit.maxStats.attack} />
            <StatRow label="Armadura" base={`${unit.baseStats.meleeArmor}/${unit.baseStats.pierceArmor}`} max={`${unit.maxStats.meleeArmor}/${unit.maxStats.pierceArmor}`} />
            <StatRow label="Alcance" base={unit.baseStats.range} max={unit.maxStats.range} />
            <StatRow label="Velocidad" base={unit.baseStats.speed} max={unit.maxStats.speed} />
        </div>
        <p className="text-xs text-gray-500 mt-3">Estadísticas Máximas con todas las mejoras genéricas aplicadas.</p>
    </div>
);

const UnitsPage: React.FC = () => {
    const [selectedLine, setSelectedLine] = useState<UnitLine | null>(null);

    const LeftColumn = (
        <div>
            <h2 className="text-2xl font-serif font-bold text-aoe-gold mb-4">Líneas de Unidades</h2>
            <ul className="space-y-2">
                {unitLinesData.map((line) => (
                    <li key={line.id}>
                        <button
                            onClick={() => setSelectedLine(line)}
                            className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${selectedLine?.id === line.id ? 'bg-aoe-blue text-white' : 'hover:bg-gray-700'}`}
                        >
                            {line.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

    const RightColumn = (
        selectedLine ? (
            <div className="animate-fade-in">
                <h2 className="text-4xl font-serif font-bold text-aoe-gold mb-6">{selectedLine.name}</h2>
                <div className="space-y-6">
                    {selectedLine.units.map(unit => <UnitCard key={unit.name} unit={unit} />)}
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl text-gray-500">Selecciona una línea de unidad para ver sus detalles.</p>
            </div>
        )
    );

    return (
        <TwoColumnLayout
            leftColumn={LeftColumn}
            rightColumn={RightColumn}
        />
    );
};

export default UnitsPage;
