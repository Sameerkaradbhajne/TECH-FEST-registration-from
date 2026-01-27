import React, { useState } from 'react';
import { Calendar, Rocket, CheckCircle, Smartphone, Loader2, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import SuccessModal from './SuccessModal';
import techBg from '../assets/Tech Innovation.jpg';

const RegistrationSection = ({ activeTab }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        studentId: '',
        email: '',
        event: "Annual Cultural Fest '26",
        competition: "Hack-Nexus 24h Hackathon",
        teamSize: "Solo",
        teamName: '',
        leaderEmail: '',
        role: 'Event Coordinator',
        reason: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Simulate submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
        }, 1500);
    };

    const isGeneral = activeTab === 'general';
    const isTechfest = activeTab === 'techfest';
    const isOrganize = activeTab === 'organize';

    return (
        <>
            <div className="flex gap-4 animate-slide-up" style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>

                {/* Left Column: Info Card */}
                <div style={{ flex: '1', minWidth: '350px' }}>
                    <div className="bg-white rounded shadow" style={{ padding: '2.5rem', height: '100%', position: 'relative' }}>

                        {/* Header Icon */}
                        <div style={{
                            width: '56px', height: '56px',
                            backgroundColor: '#eff6ff',
                            borderRadius: '12px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '2rem',
                            color: 'var(--primary-color)'
                        }}>
                            {isGeneral && <Calendar size={28} />}
                            {isTechfest && <Rocket size={28} />}
                            {isOrganize && <Users size={28} />}
                        </div>

                        {isTechfest && (
                            <div style={{
                                marginBottom: '1.5rem',
                                borderRadius: '0.5rem',
                                overflow: 'hidden',
                                height: '180px',
                                width: '100%',
                                marginTop: '-1rem'
                            }}>
                                <img src={techBg} alt="Techfest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        )}

                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1.5rem', color: '#111827', lineHeight: 1.1 }}>
                            {isGeneral && 'General Event Registration'}
                            {isTechfest && "Techfest '26 Arena"}
                            {isOrganize && 'Organize & Work'}
                        </h2>

                        <p style={{ color: '#6B7280', marginBottom: '3rem', lineHeight: 1.6, fontSize: '1.1rem' }}>
                            {isGeneral && "Sign up for cultural fests, guest lectures, and sports tournaments. Stay connected with campus life."}
                            {isTechfest && "Register for technical competitions, hackathons, and innovation labs. Push the boundaries of engineering."}
                            {isOrganize && "Join the core committee or apply as a volunteer. Shape how the university celebrates innovation and culture."}
                        </p>

                        {/* Official Badge */}
                        <div className="flex items-center gap-3" style={{ marginTop: 'auto' }}>
                            <ShieldCheck size={20} className="text-primary" />
                            <span style={{
                                color: 'var(--primary-color)',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                Official NovaTech Registration
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div style={{ flex: '1.5', minWidth: '400px' }}>
                    <div className="bg-white rounded shadow" style={{ padding: '3rem' }}>
                        <form onSubmit={handleSubmit}>

                            {/* General Events Form */}
                            {isGeneral && (
                                <div className="animate-fade-in grid-form">
                                    <div className="flex gap-6 mb-6">
                                        <div className="w-full">
                                            <label className="input-label">FULL NAME</label>
                                            <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="input-field" placeholder="John Doe" />
                                        </div>
                                        <div className="w-full">
                                            <label className="input-label">STUDENT ID</label>
                                            <input required name="studentId" value={formData.studentId} onChange={handleChange} type="text" className="input-field" placeholder="STU-2026-001" />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="input-label">EMAIL ADDRESS</label>
                                        <input required name="email" value={formData.email} onChange={handleChange} type="email" className="input-field" placeholder="john@college.edu" />
                                    </div>

                                    <div className="mb-8">
                                        <label className="input-label">SELECT EVENT</label>
                                        <select name="event" value={formData.event} onChange={handleChange} className="input-field select-arrow">
                                            <option>Annual Cultural Fest '26</option>
                                            <option>Guest Lecture System</option>
                                            <option>Sports Tournament</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Techfest Form */}
                            {isTechfest && (
                                <div className="animate-fade-in grid-form">
                                    <div className="flex gap-6 mb-6">
                                        <div style={{ flex: 1.5 }}>
                                            <label className="input-label">COMPETITION</label>
                                            <select name="competition" value={formData.competition} onChange={handleChange} className="input-field select-arrow">
                                                <option>Hack-Nexus 24h Hackathon</option>
                                                <option>RoboWars</option>
                                            </select>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label className="input-label">TEAM NAME</label>
                                            <input required name="teamName" value={formData.teamName} onChange={handleChange} type="text" className="input-field" placeholder="The Alpha Devs" />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="input-label">LEAD PARTICIPANT EMAIL</label>
                                        <input required name="leaderEmail" value={formData.leaderEmail} onChange={handleChange} type="email" className="input-field" placeholder="lead@team.com" />
                                    </div>

                                    <div className="mb-8">
                                        <label className="input-label">TEAM SIZE</label>
                                        <div className="flex gap-4">
                                            {['Solo', 'Duo', 'Quad'].map((size) => (
                                                <div
                                                    key={size}
                                                    onClick={() => setFormData(prev => ({ ...prev, teamSize: size }))}
                                                    style={{
                                                        flex: 1,
                                                        padding: '1rem',
                                                        border: formData.teamSize === size ? '2px solid var(--primary-color)' : '1px solid #E5E7EB',
                                                        backgroundColor: formData.teamSize === size ? '#EFF6FF' : 'white',
                                                        color: formData.teamSize === size ? 'var(--primary-color)' : '#6B7280',
                                                        borderRadius: '0.5rem',
                                                        textAlign: 'center',
                                                        cursor: 'pointer',
                                                        fontWeight: 600,
                                                        transition: 'all 0.2s',
                                                        fontSize: '0.9rem'
                                                    }}
                                                >
                                                    {size}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Organize Form */}
                            {isOrganize && (
                                <div className="animate-fade-in grid-form">
                                    <div className="flex gap-6 mb-6">
                                        <div className="w-full">
                                            <label className="input-label">FULL NAME</label>
                                            <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="input-field" />
                                        </div>
                                        <div className="w-full">
                                            <label className="input-label">PREFERRED ROLE</label>
                                            <select name="role" value={formData.role} onChange={handleChange} className="input-field select-arrow">
                                                <option>Event Coordinator</option>
                                                <option>Volunteer</option>
                                                <option>Technical Lead</option>
                                                <option>Marketing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="input-label">WHY ARE YOU INTERESTED?</label>
                                        <textarea
                                            required
                                            name="reason"
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="Brief statement of purpose..."
                                            style={{ height: '120px', resize: 'none' }}
                                        />
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-glow bg-primary w-full text-white font-bold rounded"
                                style={{
                                    padding: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    fontSize: '0.9rem',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    opacity: isLoading ? 0.7 : 1,
                                    cursor: isLoading ? 'not-allowed' : 'pointer',
                                    borderRadius: '0.5rem'
                                }}
                            >
                                {isLoading ? <Loader2 className="animate-spin" size={20} /> : null}
                                {isLoading ? 'PROCESSING...' : (
                                    <>
                                        {isGeneral && 'COMPLETE REGISTRATION'}
                                        {isTechfest && 'CONFIRM COMPETITION SLOT'}
                                        {isOrganize && 'SUBMIT APPLICATION'}
                                        {!isLoading && (isTechfest ? <Rocket size={18} /> : (isOrganize ? <Users size={18} /> : <ArrowRight size={18} />))}
                                    </>
                                )}
                            </button>
                        </form>

                        <style>{`
              .input-label {
                display: block;
                font-weight: 700;
                color: #9CA3AF; /* Light gray text for labels as per design */
                margin-bottom: 0.75rem;
                font-size: 0.75rem;
                letter-spacing: 0.5px;
                text-transform: uppercase;
              }
              .input-field {
                width: 100%;
                padding: 1rem 1.25rem;
                border: 1px solid transparent;
                border-radius: 0.5rem;
                background-color: #F9FAFB; /* Very light cool gray */
                font-family: inherit;
                color: #1F2937;
                font-size: 1rem;
                outline: none;
                transition: all 0.2s;
              }
              .input-field:focus {
                background-color: white;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 4px #EFF6FF;
              }
              .select-arrow {
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 1.25rem center;
                background-size: 1rem;
              }
            `}</style>
                    </div>
                </div>

            </div>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                userName={isTechfest ? formData.teamName : formData.fullName}
                eventName={isGeneral ? formData.event : (isTechfest ? formData.competition : formData.role)}
            />
        </>
    );
};

export default RegistrationSection;
