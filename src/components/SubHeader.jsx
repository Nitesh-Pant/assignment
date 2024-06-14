import React, { useState } from 'react';
import FilterModal from './FilterModal';

const SubHeader = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);

    const toggleFilterModal = () => {
        setShowFilterModal(!showFilterModal);
    };

    return (
        <div style={styles.subHeader}>
            <span style={styles.text}>Inventory</span>
            <div style={styles.rightSection}>
                <span style={styles.text}>Select Dealer</span>
                <select style={styles.dropdown}>
                    <option value="dealer1">AAA Dealer</option>
                    <option value="dealer2">BBB Dealer</option>
                    <option value="dealer3">CCC Dealer</option>
                </select>
                <button style={styles.button} onClick={toggleFilterModal}>Filter Data By</button>
            </div>
            {showFilterModal && <FilterModal closeModal={toggleFilterModal} />}
        </div>
    );
};

const styles = {
    subHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        marginRight: '20px',
        fontSize: '16px',
    },
    dropdown: {
        marginRight: '20px',
        padding: '5px',
    },
    button: {
        padding: '8px 16px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
    },
};

export default SubHeader;
