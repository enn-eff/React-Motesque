import React, { useState, useEffect } from 'react';

import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TransitionsSnackbar from './Components/Snackbar';
// import { Snackbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function FetchingDiagnosticsList() {
    const classes = useStyles();

    const [diagnosticList, setDiagnosticList] = useState([]);

    function handleClick(queryPath, e) {
        console.log(e);
        const valueTemp = 'rest';

        const individualTestEndPoint =
            'http://localhost:8001/api/v1/diagnostics' + queryPath;
        console.log(individualTestEndPoint);

        const headers = {
            'Content-Type': 'application/json',
            'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
        };

        axios
            .post(individualTestEndPoint, { headers })
            .then((res) => {
                console.log(res.data.result);
                let storageData = localStorage.getItem('myValueInLocalStorage');
                debugger;
                if (storageData !== null) {
                    storageData.push({
                        name: 'Test',
                        value: res.data.result,
                    });
                    localStorage.setItem(
                        'myValueInLocalStorage',
                        JSON.stringify(storageData)
                    );
                } else {
                    let storageData = [
                        {
                            name: 'Test',
                            value: res.data.result,
                        },
                    ];
                    localStorage.setItem(
                        'myValueInLocalStorage',
                        JSON.stringify(storageData)
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios
            .get('http://localhost:8001/tests')
            .then((res) => {
                console.log(res);
                setDiagnosticList(res.data.tests);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <React.Fragment>
            <TransitionsSnackbar />
            <List>
                {diagnosticList.map((item, index) => {
                    return (
                        <div>
                            <ListItem key={index}>
                                <ListItemText>
                                    {item.category.toUpperCase()}
                                </ListItemText>
                            </ListItem>
                            {item.tests.map((subitem, i) => {
                                return (
                                    <List disablePadding component='div'>
                                        <ListItem
                                            button
                                            key={i}
                                            className={classes.nested}
                                            onClick={handleClick.bind(
                                                this,
                                                subitem.route
                                            )}
                                        >
                                            <ListItemText>
                                                {subitem.name}
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                );
                            })}
                            <Divider />
                        </div>
                    );
                })}
            </List>
        </React.Fragment>
    );
}

export default FetchingDiagnosticsList;
