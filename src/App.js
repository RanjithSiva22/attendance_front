// import './App.css';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import View from './screens/View';
import Mark from './screens/Mark';

import Attendance from './screens/Attendance';
import ProtectedRoute from "./ProtectedRoute";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/attendance/:id',
      component: Attendance
    },
    {
      path: '/view/:id',
      component: View
    },
    {
      path: '/addmark',
      component: Mark
    }
  ]
  return (
    <div className="App">
          <Router>
      <div>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/register" component={Register} />

          {routes.map(route => <ProtectedRoute exact {...route} />)}

        </Switch>
      </div>
    </Router>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/home" component={Home}  />
          <Route exact path="/attendance/:id" component={Attendance}  />


        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
