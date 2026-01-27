import React from 'react';
import culturalImg from '../assets/Cultural Fest.jpg';
import techImg from '../assets/Tech Innovation.jpg';
import workImg from '../assets/Work Opportunity.jpg';
import { ArrowUpRight } from 'lucide-react';

const FeaturedOpportunities = ({ onFeatureClick }) => {
    const opportunities = [
        {
            id: 'cultural',
            title: "CULTURAL FEST",
            image: culturalImg
        },
        {
            id: 'tech',
            title: "TECH INNOVATION",
            image: techImg
        },
        {
            id: 'work',
            title: "WORK OPPORTUNITY",
            image: workImg
        }
    ];

    return (
        <section className="container" style={{ padding: '4rem 1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>
                    Featured Opportunities
                </h2>
                <p style={{ color: '#6B7280', fontSize: '1.1rem' }}>
                    Pick your arena and show your skills. Click a card to register.
                </p>
            </div>

            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                {opportunities.map((opp, index) => (
                    <div
                        key={index}
                        onClick={() => onFeatureClick(opp.id)}
                        style={{
                            flex: '1',
                            minWidth: '300px',
                            height: '240px',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer'
                        }}
                        className="feature-card"
                    >
                        <img
                            src={opp.image}
                            alt={opp.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                            className="hover-zoom"
                        />
                        <div style={{
                            position: 'absolute',
                            top: '1.5rem',
                            left: '1.5rem',
                            backgroundColor: activeTabColor(index),
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            zIndex: 10,
                            display: 'flex', alignItems: 'center', gap: '0.25rem'
                        }}>
                            {opp.title} <ArrowUpRight size={14} />
                        </div>

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                            pointerEvents: 'none'
                        }}></div>
                    </div>
                ))}
            </div>
            <style>{`
        .feature-card {
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
};

// Helper for pill colors based on screenshot approximation
const activeTabColor = (index) => {
    if (index === 0) return '#111827'; // Dark/Black
    if (index === 1) return '#4F46E5'; // Indigo/Purple
    if (index === 2) return '#111827'; // Dark/Black
    return 'black';
};

export default FeaturedOpportunities;
