import React from 'react';

const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.leftSection}>
                <img
                    src="../public/fIcon.png"
                    alt="icon"
                    style={styles.icon}
                />
                <span style={styles.text}>Admin Console</span>
                <button style={{ ...styles.button, ...styles.adminButton }}>Admin View</button>
            </div>
            <div style={styles.rightSection}>
                <button style={styles.button}>Support</button>
                <div style={styles.profileIcon}></div>
                <span style={styles.text}>Jane</span>
                <img
                    src="your-dropdown-icon-url.png"
                    alt="dropdown icon"
                    style={styles.dropdownIcon}
                />
            </div>
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '10px 20px',
        color: 'white',
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        width: '30px',
        height: '30px',
        marginRight: '10px',
    },
    text: {
        marginRight: '20px',
        fontSize: '16px',
    },
    button: {
        padding: '8px 16px',
        border: 'none',
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
    },
    adminButton: {
        borderRadius: '15px',
    },
    profileIcon: {
        width: '30px',
        height: '30px',
        marginLeft: '20px',
        marginRight: '10px',
        borderRadius: '50%',

        backgroundColor: '#bbb'
    },
    dropdownIcon: {
        width: '15px',
        height: '15px',
        marginLeft: '5px',
    }
};

export default Header;
