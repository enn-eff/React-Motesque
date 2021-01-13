// core react modules
import React, { useState, useEffect } from 'react';

// material and component modules
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//#region internal css styles
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        width: 600,
    },
});
//#endregion

// Displaying Diagnostic Run Tests History
function DisplayingResultsHistory() {
    const classes = useStyles();
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        setHistoryList(JSON.parse(localStorage.getItem('Value')));
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <h1>History Of Run Tests</h1>
            </div>
            <div
                style={{
                    overflowY: 'auto',
                    height: '550px',
                    width: '620px',
                    marginTop: '20px',
                }}
            >
                <TableContainer component={Paper}>
                    <Table
                        className={classes.table}
                        aria-label='customized table'
                    >
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align='right'>
                                    Name
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    Status
                                </StyledTableCell>
                                <StyledTableCell align='right'>
                                    Time
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {historyList &&
                                historyList.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align='right'>
                                            {' '}
                                            {row.name}{' '}
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            {row.value}
                                        </StyledTableCell>
                                        <StyledTableCell align='right'>
                                            {row.date}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default DisplayingResultsHistory;
