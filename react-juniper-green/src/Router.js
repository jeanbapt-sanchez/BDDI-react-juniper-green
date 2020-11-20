import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Game from './components/Game';
import Home from './components/Home';
import Rules from './components/Rules';

const ConfigRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/game">
            <Game/>
          </Route>
          <Route exact path="/game/rules">
            <Rules/>
          </Route>
        </Switch>
    </Router>
  );
}

export default ConfigRouter;
