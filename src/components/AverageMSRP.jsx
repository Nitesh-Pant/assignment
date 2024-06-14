import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const AverageMSRP = () => {
    const [chartData, setChartData] = useState(null);

    const fetchData = async (type) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/data/condition/average-price/${type}`);
            const data = response.data;
            

            setChartData({
                labels: data.label,
                datasets: [
                    {
                        label: 'Average MSRP in USD',
                        data: data.avgPrice,
                        backgroundColor: 'rgb(255, 153, 38)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <span style={styles.text}>Average MSRP in USD</span>
                <div style={styles.buttonGroup}>
                    <button style={styles.button} onClick={() => fetchData('new')}>New</button>
                    <button style={styles.button} onClick={() => fetchData('used')}>Used</button>
                    <button style={styles.button} onClick={() => fetchData('cpo')}>CPO</button>
                </div>
            </div>
            <div style={styles.chartContainer}>
                {chartData ? (
                    <Bar data={chartData} options={chartOptions} />
                ) : (
                    <p>No data available. Click a button to fetch data.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: '20px',
    },
    text: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginRight: '20px',
    },
    buttonGroup: {
        display: 'flex',
    },
    button: {
        padding: '10px 20px',
        marginLeft: '10px',
        border: 'none',
        backgroundColor: '#FF9926',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    chartContainer: {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
    },
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export default AverageMSRP;
