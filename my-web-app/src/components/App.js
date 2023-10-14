import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import Peliculas from './Peliculas';
import Series from './Series';
import Documentales from './Documentales';
import Resenas from './Resenas';
import '/styles.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ItemListContainer} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
        <Route path="/documentales" component={Documentales} />
        <Route path="/resenas" component={Resenas} />
      </Switch>
    </Router>
  );
}

export default App;