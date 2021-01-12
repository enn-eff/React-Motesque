// core import
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FetchingDiagnosticsList from './Pages/FetchingList';

// css imports
import './App.css';
import DenseAppBar from './Pages/Components/AppBar';
import DisplayingHistory from './Pages/DisplayingHistory';

// import FetchingList from
function App() {
    // //import useState hook
    // const [data, setData] = useState(null);

    return (
        <React.Fragment>
            <Router>
                <DenseAppBar />
                <Route exact path='/history' component={DisplayingHistory} />
                <Route exact path='/' component={FetchingDiagnosticsList} />
            </Router>

            {/* <CssBaseline /> */}
            {/* <Container maxWidth='md'>
                <Typography
                    component={FetchingDiagnosticsList}
                    style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
                />
            </Container> */}
        </React.Fragment>
    );
}

export default App;
