import { BrowserRouter,Switch,Route } from "react-router-dom";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";
<<<<<<< HEAD
import GerenciadorDicasPage from "./modules/gerenciadorDicas/pages/gerenciadorDicasPage"
=======
import GerenciadorObjetivoPage from "./modules/gerenciadorObjetivo/pages/gerenciadorObjetivoPage";
>>>>>>> feature/objetivo

function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/login" component={loginPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
<<<<<<< HEAD
                <Route path="/gerenciadordedicas" component={GerenciadorDicasPage}/>

=======
                <Route path="/gerenciadordeobjetivo" component={GerenciadorObjetivoPage}/>
>>>>>>> feature/objetivo
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;