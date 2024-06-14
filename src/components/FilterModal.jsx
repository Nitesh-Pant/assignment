import React, { useState } from 'react';

const FilterModal = ({ closeModal }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        make: [],
        duration: []
    });

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setSelectedFilters((prevFilters) => {
            const newValues = checked
                ? [...prevFilters[name], value]
                : prevFilters[name].filter((item) => item !== value);
            return { ...prevFilters, [name]: newValues };
        });
    };

    const applyFilter = () => {
        console.log('Applying filters:', selectedFilters);
        
        closeModal();
    };

    const removeAllFilters = () => {
        setSelectedFilters({ make: [], duration: [] });
        console.log('All filters removed');
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <h2>Filter Data By</h2>
                <hr />
                <div style={modalStyles.section}>
                    <h3>Make</h3>
                    <label>
                        <input 
                            type="checkbox" 
                            name="make" 
                            value="Option 1" 
                            checked={selectedFilters.make.includes("Option 1")}
                            onChange={handleCheckboxChange}
                        />
                        Ford
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type="checkbox" 
                            name="make" 
                            value="Option 2" 
                            checked={selectedFilters.make.includes("Option 2")}
                            onChange={handleCheckboxChange}
                        />
                        Cadillac
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type="checkbox" 
                            name="make" 
                            value="Option 3" 
                            checked={selectedFilters.make.includes("Option 3")}
                            onChange={handleCheckboxChange}
                        />
                        Jeep
                    </label>
                </div>
                <hr />
                <div style={modalStyles.section}>
                    <h3>Duration</h3>
                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option A" 
                            checked={selectedFilters.duration.includes("Option A")}
                            onChange={handleCheckboxChange}
                        />
                        Last Month
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option B" 
                            checked={selectedFilters.duration.includes("Option B")}
                            onChange={handleCheckboxChange}
                        />
                        This Month
                    </label>
                    <br></br>

                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option C" 
                            checked={selectedFilters.duration.includes("Option C")}
                            onChange={handleCheckboxChange}
                        />
                        Last 3 Months
                    </label>
                    <br></br>

                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option D" 
                            checked={selectedFilters.duration.includes("Option D")}
                            onChange={handleCheckboxChange}
                        />
                        Last 6 Months
                    </label>
                    <br></br>

                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option E" 
                            checked={selectedFilters.duration.includes("Option E")}
                            onChange={handleCheckboxChange}
                        />
                        This Year
                    </label>
                    <br></br>
                    <label>
                        <input 
                            type="checkbox" 
                            name="duration" 
                            value="Option F" 
                            checked={selectedFilters.duration.includes("Option F")}
                            onChange={handleCheckboxChange}
                        />
                        Last Year
                    </label>
                </div>
                <div style={modalStyles.buttons}>
                    <button style={modalStyles.button} onClick={applyFilter}>Apply Filter</button>
                    <button style={{...modalStyles.button2, borderColor: '#FF9926'}} onClick={removeAllFilters}>Remove All Filters</button>
                </div>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        width: '400px',
    },
    section: {
        marginBottom: '20px',
        justifyContent: 'left'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '8px 16px',
        border: 'none',
        backgroundColor: '#FF9926',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
    },
    button2: {
        padding: '8px 16px',
        border: 'none',
        color: '#FF9926',
        borderColor: "#FF9926",
        cursor: 'pointer',
        borderRadius: '5px',
    }
};

export default FilterModal;
