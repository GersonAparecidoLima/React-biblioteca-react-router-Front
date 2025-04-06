// src/pages/Produto/Produto.tsx
import React, { useState } from 'react';
import style from './Produto.module.scss'; // Importando os estilos do módulo

const Produto = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função simulada para envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulando o envio dos dados e a resposta da API com console.log
    setTimeout(() => {
      console.log('Produto Cadastrado:');
      console.log('Nome do Produto:', nomeProduto);
      console.log('Descrição do Produto:', descricaoProduto);

      // Limpar os campos após o "envio"
      setNomeProduto('');
      setDescricaoProduto('');
      setIsLoading(false);
      alert('Produto cadastrado com sucesso!');
    }, 1000); // Simula o tempo de resposta da API
  };

  return (
    <div className={style.container}>
      <h2 className={style.titulo}>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit} className={style.formulario}>
        <div className={style.inputWrapper}>
          <label htmlFor="nomeProduto">Nome do Produto:</label>
          <input
            id="nomeProduto"
            type="text"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
            placeholder="Nome do produto"
          />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="descricaoProduto">Descrição:</label>
          <input
            id="descricaoProduto"
            type="text"
            value={descricaoProduto}
            onChange={(e) => setDescricaoProduto(e.target.value)}
            placeholder="Descrição do produto"
          />
        </div>
        <button type="submit" className={style.botao} disabled={isLoading}>
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default Produto;
