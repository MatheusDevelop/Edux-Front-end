import { BrowserRouter,Switch,Route } from "react-router-dom";
import loginPage from "./modules/login/pages/loginPage";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={loginPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;