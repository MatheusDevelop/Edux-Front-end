import { BrowserRouter,Switch,Route } from "react-router-dom";
import CadastrarPage from "./modules/cadastro/pages/cadastrarPage";
import GerenciadorTurmasPage from "./modules/gerenciadorTurmas/pages/gerenciadorTurmasPage";
import loginPage from "./modules/login/pages/loginPage";

import GerenciadorObjetivoPage from "./modules/gerenciadorObjetivo/pages/gerenciadorObjetivoPage";
import GerenciadorCategoriasPage from "./modules/gerenciadorCategoria/pages/gerenciadorCategoria";
import GerenciadorDicasPage from "./modules/gerenciadorDicas/pages/gerenciadorCategoria";
import GerenciadorCursosPage from "./modules/gerenciadorCursos/pages/gerenciadorCursosPage";
import Feed from "./modules/feed/pages/feed";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={loginPage}/>
                <Route path="/cadastrar" component={CadastrarPage}/>
                <Route path="/gerenciadordeturmas" component={GerenciadorTurmasPage}/>
                <Route path="/gerenciadordedicas" component={GerenciadorCategoriasPage} />
                <Route path="/gerenciadordeobjetivo" component={GerenciadorObjetivoPage}/>
                <Route path="/gerenciadordecategoria" component={GerenciadorCategoriasPage} />
                <Route path="/gerenciadordecursos" component={GerenciadorCursosPage} />
                <Route path="/feed" component={Feed} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;