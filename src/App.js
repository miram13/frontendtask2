
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SeatSelection from "./components/SeatSelection";
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();
const App = () => {
   return (
    
    <div>
      <Router history={newHistory}>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/seats'>
          <SeatSelection />
        </Route>
        </Switch>
        </Router>
    </div>
  
  );
};

export default App;
