import { BrowserRouter,Switch,Route } from "react-router-dom";
import CadastrarPage from "./modules/cadastro/pages/cadastrarPage";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={loginPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
                <Route path="/cadastrar" component={CadastrarPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;