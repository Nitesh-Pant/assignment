import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentData = () => {
    const [recentData, setRecentData] = useState({});
    const [recentDataTemp, setRecentDataTemp] = useState([1, 2, 3, 4, 5]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/data/total-stats`);
            setRecentData(response.data);
        } catch (error) {
            console.error('Error fetching recent data:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Recent Gathered {new Date().toLocaleDateString()}</h2>
            <div style={styles.cardsContainer}>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.newCount}</h3>
                    <p style={styles.cardText}># New Units</p>
                </div>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.cpoCount}</h3>
                    <p style={styles.cardText}>New MSRP</p>
                </div>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.usedCount}</h3>
                    <p style={styles.cardText}>New Avg. MSRP</p>
                </div>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.newMsrp}</h3>
                    <p style={styles.cardText}># Used Units</p>
                </div>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.usedMsrp}</h3>
                    <p style={styles.cardText}>Used MSRP</p>
                </div>
                <div style={styles.card} >
                    <h3 style={styles.cardTitle}>{recentData.usedCount}</h3>
                    <p style={styles.cardText}>New Avg. MSRP</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    heading: {
        fontSize: '24px',
        display: 'flex',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    card: {
        width: '200px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    cardText: {
        fontSize: '16px',
        color: '#FF9926',
    },
};

export default RecentData;
