// core react import
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// material and component modules
import DisplayingDiagnosticsList from './Pages/FetchingList';
import DenseAppBar from './Pages/Components/AppBar';
import DisplayingHistory from './Pages/DisplayingHistory';

// external css imports
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Router>
                <DenseAppBar />
                <Route exact path='/history' component={DisplayingHistory} />
                <Route exact path='/' component={DisplayingDiagnosticsList} />
            </Router>
        </React.Fragment>
    );
}

export default App;
