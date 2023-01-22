import {Route, Switch,Redirect, BrowserRouter} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import './App.css'
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import NotFound from "./components/NotFound"

const App = () => 
<BrowserRouter>
        <Switch>
            <Route exact path="/ebank/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
        </Switch>
</BrowserRouter>

export default App
