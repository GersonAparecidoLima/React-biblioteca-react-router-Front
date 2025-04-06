import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cadastro from '../pages/Cadastro/Cadastro'; // Importando o componente Cadastro
import Tarefa from '../pages/Tarefa/Tarefa'; // Importando o componente Tarefa
import Produto from '../pages/Produto/Produto'; // Importando o componente Produto
import style from './App.module.scss'; // Importando o estilo do App

function App() {
  return (
    <Router>
      <div className={style.AppContainer}> {/* Adicionando uma classe de contêiner global */}
        <nav className={style.Navbar}>
          <ul>
            <li>
              <Link to="/tarefa" className={style.NavLink}>Tarefa</Link>
            </li>
            <li>
              <Link to="/cadastro" className={style.NavLink}>Cadastro</Link> {/* Link para Cadastro */}
            </li>
            <li>
              <Link to="/produto" className={style.NavLink}>Produto</Link> {/* Link para Produto */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tarefa" element={<Tarefa />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produto" element={<Produto />} /> {/* Nova rota para Produto */}
          <Route path="/" element={<h1>Bem-vindo ao Meu Aplicativo</h1>} /> {/* Página inicial */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
