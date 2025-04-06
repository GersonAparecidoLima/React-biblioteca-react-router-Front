import React from 'react';
import style from './ListaUsuario.module.scss';

const ListaUsuario = () => {
  // Suponhamos que você tenha uma lista de usuários com nome e e-mail
  const usuarios = [
    { nome: 'João Silva', email: 'joao.silva@example.com' },
    { nome: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { nome: 'Carlos Souza', email: 'carlos.souza@example.com' },
  ];

  return (
    <div className={style.listaUsuarioContainer}>
      <h2>Lista de Usuários</h2>
      <table className={style.tabelaUsuarios}>
        <thead>
          <tr>
            <th className={style.tituloColuna}>Nome</th>
            <th className={style.tituloColuna}>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td className={style.usuarioNome}>{usuario.nome}</td>
              <td className={style.usuarioEmail}>{usuario.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuario;
