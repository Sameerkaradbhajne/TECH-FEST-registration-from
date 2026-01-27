import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, userName, eventName }) => {
    useEffect(() => {
        if (isOpen) {
            // Fire confetti
            const duration = 3000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#2563eb', '#ffffff', '#a855f7']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#2563eb', '#ffffff', '#a855f7']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '3rem',
                borderRadius: '1rem',
                textAlign: 'center',
                maxWidth: '500px',
                width: '90%',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                animation: 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        color: '#9ca3af',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{
                    width: '80px', height: '80px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: '#2563eb'
                }}>
                    <CheckCircle size={48} />
                </div>

                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937', marginBottom: '0.5rem' }}>
                    Registration Confirmed!
                </h2>
                <p style={{ color: '#4b5563', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                    Congratulations <strong>{userName}</strong>! You have successfully registered for <br />
                    <span style={{ color: '#2563eb', fontWeight: 600 }}>{eventName}</span>.
                </p>

                <button
                    onClick={onClose}
                    className="btn-glow"
                    style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        fontWeight: 700,
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                        width: '100%',
                        fontSize: '1.1rem'
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
