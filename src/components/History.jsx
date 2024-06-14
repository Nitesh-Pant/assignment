import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TablePagination
} from '@mui/material';

const History = () => {
    const [logs, setLogs] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchLogs();
    }, [page, rowsPerPage]);

    const fetchLogs = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/data/avg-prices-by-date`, {
                params: {
                    page: page + 1,  
                    limit: rowsPerPage,
                }
            });
            setLogs(response.data);
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);  // Reset to the first page
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <span style={styles.text}>History Logs</span>
            </div>
            <TableContainer component={Paper} style={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>New Inventory</TableCell>
                            <TableCell>Used Inventory</TableCell>
                            <TableCell>Used Average MSRP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.date}>
                                <TableCell>{log.date    }</TableCell>
                                <TableCell>{log.newAvgPrice}</TableCell>
                                <TableCell>{log.newInventoryCount}</TableCell>
                                <TableCell>{log.newInventoryCount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={100}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
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
    },
    tableContainer: {
        marginTop: '20px',
    },
};

export default History;
