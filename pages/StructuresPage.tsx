
import React, { useState } from 'react';
import TwoColumnLayout from '../components/TwoColumnLayout';
import { structuresData, structureCategories } from '../data/structures';
import type { Structure, StructureCategory } from '../types';

const StructuresPage: React.FC = () => {
    const [selectedStructure, setSelectedStructure] = useState<Structure | null>(null);

    const LeftColumn = (
        <div>
            <h2 className="text-2xl font-serif font-bold text-aoe-gold mb-4">Estructuras</h2>
            <div className="space-y-4">
                {structureCategories.map(category => (
                    <div key={category}>
                        <h3 className="text-lg font-bold text-aoe-blue mb-2">{category}</h3>
                        <ul className="space-y-1 pl-2 border-l-2 border-gray-700">
                            {structuresData.filter(s => s.category === category).map(structure => (
                                <li key={structure.id}>
                                    <button
                                        onClick={() => setSelectedStructure(structure)}
                                        className={`w-full text-left p-2 rounded-md transition-colors duration-200 text-sm ${selectedStructure?.id === structure.id ? 'bg-aoe-blue text-white' : 'hover:bg-gray-700'}`}
                                    >
                                        {structure.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
    
    const RightColumn = (
        selectedStructure ? (
            <div className="animate-fade-in">
                 <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                    <img src={selectedStructure.image} alt={selectedStructure.name} className="w-32 h-32 rounded-lg border-2 border-gray-600"/>
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-aoe-gold">{selectedStructure.name}</h2>
                         <p className="mt-2 text-gray-300">{selectedStructure.function}</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-black/20 p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-aoe-blue mb-3">Estadísticas</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><strong>Puntos de Vida (HP):</strong> {selectedStructure.stats.hp.base} (Base), {selectedStructure.stats.hp.max} (Máx)</li>
                            <li><strong>Armadura:</strong> {selectedStructure.stats.meleeArmor} (c/c), {selectedStructure.stats.pierceArmor} (anti-proyectil)</li>
                            {selectedStructure.stats.attack && <li><strong>Ataque:</strong> {selectedStructure.stats.attack}</li>}
                            {selectedStructure.stats.range && <li><strong>Alcance:</strong> {selectedStructure.stats.range}</li>}
                            <li><strong>Guarnición:</strong> {selectedStructure.stats.garrison} unidades</li>
                        </ul>
                    </div>
                     <div className="bg-black/20 p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-aoe-blue mb-3">Unidades Entrenables</h3>
                        {selectedStructure.trainableUnits.length > 0 ? (
                             <ul className="list-disc list-inside text-gray-300">
                                {selectedStructure.trainableUnits.map(u => <li key={u}>{u}</li>)}
                            </ul>
                        ) : <p className="text-gray-500">Ninguna</p>}
                    </div>
                     <div className="bg-black/20 p-4 rounded-lg lg:col-span-2">
                        <h3 className="text-xl font-bold text-aoe-blue mb-3">Tecnologías Investigables</h3>
                        {selectedStructure.researchableTechs.length > 0 ? (
                            <ul className="list-disc list-inside text-gray-300">
                                {selectedStructure.researchableTechs.map(t => <li key={t}>{t}</li>)}
                            </ul>
                        ) : <p className="text-gray-500">Ninguna</p>}
                    </div>
                </div>
            </div>
        ) : (
             <div className="flex items-center justify-center h-full">
                <p className="text-2xl text-gray-500">Selecciona una estructura para ver sus detalles.</p>
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

export default StructuresPage;
