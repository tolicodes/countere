import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Carousel from './components/Carousel'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/featured">
            <Carousel items={[

            ]}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
