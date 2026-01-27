import React from 'react';
import { Network } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
    return (
        <nav style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
            padding: '0 0', // Reduced padding for cleaner look
            position: 'sticky',
            top: 0,
            zIndex: 50,
            height: '70px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container flex items-center justify-between h-full">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Network className="text-primary" size={28} strokeWidth={2.5} />
                    <span className="font-bold flex items-center" style={{ fontSize: '1.5rem', letterSpacing: '-0.5px', color: '#111827' }}>
                        NOVATECH
                    </span>
                </div>

                {/* Center Tabs */}
                <div className="flex items-center h-full hidden-mobile" style={{ gap: '2rem' }}>
                    {['General Events', "Techfest '26", 'Organize & Work'].map((tab) => {
                        const tabKey = tab.toLowerCase().startsWith('general') ? 'general'
                            : tab.toLowerCase().startsWith('tech') ? 'techfest'
                                : 'organize';
                        const isActive = activeTab === tabKey;

                        return (
                            <button
                                key={tabKey}
                                onClick={() => setActiveTab(tabKey)}
                                style={{
                                    color: isActive ? 'var(--primary-color)' : '#9CA3AF',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    height: '100%',
                                    borderBottom: isActive ? '3px solid var(--primary-color)' : '3px solid transparent',
                                    background: 'none',
                                    padding: '0 0.5rem',
                                    marginTop: '3px' // Offset to center text visually with border
                                }}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    <span style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }} className="hidden-mobile">
                        Jan 27, 2026
                    </span>
                    <button
                        onClick={() => alert('Student Portal Login Service is currently under maintenance.')}
                        className="bg-primary text-white font-bold rounded"
                        style={{
                            padding: '0.6rem 1.25rem',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                        }}
                    >
                        Portal Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
