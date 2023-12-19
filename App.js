import React from 'react';
import SignUpForm from './SignUpForm';
import SignInSide from './SignInSide';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './homePage'


// function App() {
//     return (
//         <div className="App">
//             <HomePage/>
//         </div>
//     );
// }

// export default App;

// App.js


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route path="/signin" component={SignInSide} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;


