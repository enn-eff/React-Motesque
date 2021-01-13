// core react modules
import React, { useState, useEffect } from 'react';

// material and component modules
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TransitionsSnackbar from './Components/Snackbar';

//#region internal css styles
const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
//#endregion

// Displaying Diagnostic Tests List
function DisplayingDiagnosticsList() {
    const classes = useStyles();

    const [diagnosticList, setDiagnosticList] = useState([]);
    const [result, setResult] = useState(null);
    const [showNotification, setShowNotification] = useState(null);

    const storeData = (obj) => {
        var localData = localStorage.getItem('Value');
        if (!localData) {
            const datas = [{ ...obj }];
            localStorage.setItem('Value', JSON.stringify(datas));
        } else {
            const datas = { ...obj };
            var items = [];
            items = JSON.parse(localStorage.getItem('Value'));
            items.push(datas);
            localStorage.setItem('Value', JSON.stringify(items));
        }
    };

    function handleClick(subItem, e) {
        const individualTestEndPoint =
            'http://localhost:8001/api/v1/diagnostics' + subItem.route;

        const headers = {
            'Content-Type': 'application/json',
            'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
        };

        axios
            .post(individualTestEndPoint, { headers })
            .then((res) => {
                const object = {
                    name: subItem.name,
                    value: res.data.result,
                    date: new Date(),
                };
                storeData(object);
                setResult(res.data.result);
                setShowNotification(true);
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

    const closeNotification = () => {
        setShowNotification(false);
    };

    return (
        <React.Fragment>
            {showNotification ? (
                <TransitionsSnackbar
                    message={result}
                    open={showNotification}
                    close={closeNotification}
                />
            ) : null}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h1>Diagnostics Tests List</h1>
                </div>
                <div
                    style={{
                        overflowY: 'auto',
                        width: '800px',
                        height: '550px',
                    }}
                >
                    <List>
                        {diagnosticList.map((item, index) => {
                            return (
                                <div>
                                    <ListItem key={index}>
                                        <ListItemText>
                                            <b>{item.category.toUpperCase()}</b>
                                        </ListItemText>
                                    </ListItem>
                                    {item.tests.map((subitem, i) => {
                                        return (
                                            <List
                                                disablePadding
                                                component='div'
                                            >
                                                <ListItem
                                                    button
                                                    key={i}
                                                    className={classes.nested}
                                                    onClick={handleClick.bind(
                                                        this,
                                                        subitem
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
                </div>
            </div>
        </React.Fragment>
    );
}

export default DisplayingDiagnosticsList;
