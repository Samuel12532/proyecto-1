
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-aoe-med/50 p-6 rounded-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-serif font-bold text-aoe-gold mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">
            {children}
        </p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center py-12">
                <h1 className="text-5xl font-serif font-extrabold text-aoe-gold tracking-wider">
                    Bienvenido a la Enciclopedia de Age of Empires II: HD Edition
                </h1>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                    Un texto que explica que Age of Empires II es un aclamado juego de estrategia en tiempo real (RTS) que te permite guiar a una civilización a través de mil años de historia, desde la Edad Oscura hasta la Edad Imperial.
                </p>
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-serif font-bold text-center text-aoe-blue mb-8">Mecánicas Clave</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <InfoCard title="Gestión de Recursos">
                        Explica los 4 recursos clave: Comida, Madera, Oro y Piedra. Son la espina dorsal de tu economía y ejército.
                    </InfoCard>
                    <InfoCard title="Las Edades">
                        Describe la progresión a través de las cuatro edades: Edad Oscura, Edad Feudal, Edad de los Castillos y Edad Imperial, cada una desbloqueando nuevas unidades, edificios y tecnologías.
                    </InfoCard>
                    <InfoCard title="Combate">
                        Menciona el sistema de "piedra, papel o tijera" donde la infantería vence a la caballería, la caballería a los arqueros y los arqueros a la infantería (en términos generales).
                    </InfoCard>
                    <InfoCard title="Condiciones de Victoria">
                        Nombra las formas de ganar una partida estándar: Conquista (destruir a todos los enemigos), Maravilla (construir y defender una Maravilla) y Reliquias (capturar y mantener todas las reliquias).
                    </InfoCard>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
