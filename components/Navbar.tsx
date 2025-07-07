
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navLinks = [
        { to: '/', text: 'Inicio' },
        { to: '/civilizations', text: 'Civilizaciones' },
        { to: '/units', text: 'Unidades' },
        { to: '/structures', text: 'Estructuras' },
    ];

    const activeLinkClass = 'bg-aoe-gold text-aoe-dark';
    const inactiveLinkClass = 'text-aoe-light hover:bg-aoe-med';

    return (
        <header className="bg-aoe-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold font-serif text-aoe-gold">
                            AoE II: HD
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`
                                    }
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    {/* Mobile menu could be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
