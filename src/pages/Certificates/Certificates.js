import React from 'react';
import { BadgeCheck } from 'lucide-react'; // Using BadgeCheck for the certificate icon
import './Certificates.css';

function Certificates() {
    return (
        <div className="certificates-container">
            <div className="certificates-header">
                <div className="logo-section" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    {/* Assuming header logo handled by layout or local here if needed */}
                    {/* <span style={{fontWeight: 'bold'}}>YoPips</span> */}
                </div>
                <h2>Certificates</h2>
            </div>

            <div className="certificates-empty-state">
                <div className="cert-empty-icon">
                    {/* Outline badge icon similar to screenshot */}
                    <BadgeCheck size={64} strokeWidth={1} />
                </div>
                <h3>No Certificates Yet</h3>
                <p>
                    You haven't earned any certificates yet. Receive payouts to earn your first certificate!
                </p>
            </div>
        </div>
    );
}

export default Certificates;
