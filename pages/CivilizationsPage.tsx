
import React, { useState } from 'react';
import TwoColumnLayout from '../components/TwoColumnLayout';
import { civilizationsData } from '../data/civilizations';
import type { Civilization } from '../types';

const CivilizationsPage: React.FC = () => {
    const [selectedCiv, setSelectedCiv] = useState<Civilization | null>(null);

    const handleSelectCiv = (civ: Civilization) => {
        setSelectedCiv(civ);
    };

    const LeftColumn = (
        <div>
            <h2 className="text-2xl font-serif font-bold text-aoe-gold mb-4">Civilizaciones</h2>
            <ul className="space-y-2">
                {civilizationsData.map((civ) => (
                    <li key={civ.id}>
                        <button
                            onClick={() => handleSelectCiv(civ)}
                            className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${selectedCiv?.id === civ.id ? 'bg-aoe-blue text-white' : 'hover:bg-gray-700'}`}
                        >
                            {civ.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

    const RightColumn = (
        selectedCiv ? (
            <div className="animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                    <img src={selectedCiv.shield} alt={`${selectedCiv.name} Shield`} className="w-16 h-16 object-cover rounded-full border-2 border-aoe-gold" />
                    <h2 className="text-4xl font-serif font-bold text-aoe-gold">{selectedCiv.name}</h2>
                </div>
                
                <div className="space-y-6 mt-6">
                    <div>
                        <h3 className="text-xl font-bold text-aoe-blue mb-2">Estilo de Juego</h3>
                        <p className="text-gray-300">{selectedCiv.playstyle}</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-aoe-blue mb-2">Bonos de Civilización</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {selectedCiv.bonuses.map((bonus, index) => <li key={index}>{bonus}</li>)}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold text-aoe-blue mb-2">Unidad Única: {selectedCiv.uniqueUnit.name}</h3>
                         <div className="flex flex-col md:flex-row gap-4 bg-black/20 p-4 rounded-lg">
                            <img src={selectedCiv.uniqueUnit.image} alt={selectedCiv.uniqueUnit.name} className="w-24 h-24 object-cover rounded-md self-center"/>
                            <p className="text-gray-300">{selectedCiv.uniqueUnit.description}</p>
                         </div>
                    </div>
                    
                     <div>
                        <h3 className="text-xl font-bold text-aoe-blue mb-2">Tecnologías Únicas</h3>
                        <div className="space-y-3">
                        {selectedCiv.uniqueTechs.map(tech => (
                             <div key={tech.name} className="bg-black/20 p-3 rounded-lg">
                                <p className="font-bold text-aoe-gold">{tech.name} <span className="text-sm font-normal text-gray-400">({tech.age})</span></p>
                                <p className="text-gray-300 text-sm">{tech.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-aoe-blue mb-2">Bono de Equipo</h3>
                        <p className="text-gray-300">{selectedCiv.teamBonus}</p>
                    </div>
                </div>

                <button onClick={() => setSelectedCiv(null)} className="mt-8 bg-aoe-gold text-aoe-dark font-bold py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
                    Volver a la Selección
                </button>
            </div>
        ) : (
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl text-gray-500">Selecciona una civilización para ver sus detalles.</p>
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

export default CivilizationsPage;
