import { BrowserRouter as Router,
Switch,
Route,
Link,
Redirect,
} from "react-router-dom";
import Home from "../spotify/home/home";
import Index from "../spotify/Index";

function Routes(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);

    return(
        <Router>
            <Switch>
                <Route path="/create-playlist">
                    {isLoggedIn ? (
                        <Index/>
                    ) : (
                        <Redirect exact from="/create-playlisy" to="/"/>
                    )}
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;