import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = ({ onJoinClick }) => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            overflow: 'hidden',
            color: 'white',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Background Image - Local Asset */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: '#1f2937',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }}></div>

            <div className="container animate-slide-up">
                <h1 style={{
                    fontSize: '4.5rem',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-1px'
                }}>
                    Empowering the Future.
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    maxWidth: '650px',
                    marginBottom: '2.5rem',
                    lineHeight: 1.6,
                    color: '#E5E7EB',
                    fontWeight: 500
                }}>
                    Register for upcoming college events, participate in the annual Techfest, or join our organizing committees to shape the next big thing on campus.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={onJoinClick}
                        className="btn-glow"
                        style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            fontWeight: 700,
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Join Now <ArrowRight size={20} />
                    </button>
                    <button
                        onClick={() => alert('Calendar feature coming soon!')}
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.2)',
                            fontWeight: 700,
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        View Calendar <Calendar size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
