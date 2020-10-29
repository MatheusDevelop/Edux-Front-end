import { BrowserRouter,Switch,Route } from "react-router-dom";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={loginPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;