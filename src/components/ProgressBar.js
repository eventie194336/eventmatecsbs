import React from 'react';

export const ProgressBar = ({ stage }) => {
    const stages = ['Proposal', 'Approval', 'Preparation', 'Execution', 'Completed'];

    // Find current stage index (0-4)
    const currentStageIndex = stages.findIndex(s => s.toLowerCase() === stage?.toLowerCase());

    // Calculate width percentage based on stage
    // If stage not found or invalid, default to 0
    // If stage is 'Completed', it should be 100%
    // Let's distribute it: 
    // Proposal: 20%
    // Approval: 40%
    // Preparation: 60%
    // Execution: 80%
    // Completed: 100%
    const progressPercentage = currentStageIndex >= 0 ? ((currentStageIndex + 1) * 20) : 0;

    const styles = {
        container: {
            width: '100%',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            height: '8px',
            marginTop: '0.5rem',
            overflow: 'hidden'
        },
        bar: {
            height: '100%',
            width: `${progressPercentage}%`,
            backgroundColor: '#007bff',
            borderRadius: '4px',
            transition: 'width 0.3s ease'
        },
        labels: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0.25rem',
            fontSize: '0.7rem',
            color: '#888'
        }
    };

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.bar}></div>
            </div>
            <div style={styles.labels}>
                <span>{stage}</span>
                <span>{progressPercentage}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;