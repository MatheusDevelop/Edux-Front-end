import { BrowserRouter,Switch,Route } from "react-router-dom";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";
import GerenciadorObjetivoPage from "./modules/gerenciadorObjetivo/pages/gerenciadorObjetivoPage";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={loginPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
                <Route path="/gerenciadordeobjetivo" component={GerenciadorObjetivoPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;