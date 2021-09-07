import SignUp from "./authentication/SignUp";
import Profile from "./authentication/Profile";
import LogIn from "./authentication/LogIn"
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./foogle-drive/Dashboard";

function App() {
  return  (
        <Router>
          <AuthProvider>
            <Switch>
              {/* Foogle Drive */}
              <PrivateRoute exact path = "/" component={Dashboard} />
              <PrivateRoute exact path  = "/folder/:folderId" component={Dashboard} />

              {/* Profile */}
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute  path="/update-profile" component={UpdateProfile} />

              {/* Authentication */}
              <Route path="/signup" component ={SignUp} />
              <Route path="/login" component ={LogIn} />
              <Route path="/forgot-password" component ={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
  )
}

export default App;
