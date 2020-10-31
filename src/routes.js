import { BrowserRouter,Switch,Route } from "react-router-dom";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";
import GerenciadorDicasPage from "./modules/gerenciadorDicas/pages/gerenciadorDicasPage"

function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/login" component={loginPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
                <Route path="/gerenciadordedicas" component={GerenciadorDicasPage}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;