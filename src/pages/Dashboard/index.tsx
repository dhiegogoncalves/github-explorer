import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6399309?s=460&u=23482a8359a1f0b47531b28a0e8cbb932186d509&v=4"
            alt="Dhiego"
          />
          <div>
            <strong>repository/form</strong>
            <p>teste.....</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6399309?s=460&u=23482a8359a1f0b47531b28a0e8cbb932186d509&v=4"
            alt="Dhiego"
          />
          <div>
            <strong>repository/form</strong>
            <p>teste.....</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6399309?s=460&u=23482a8359a1f0b47531b28a0e8cbb932186d509&v=4"
            alt="Dhiego"
          />
          <div>
            <strong>repository/form</strong>
            <p>teste.....</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/6399309?s=460&u=23482a8359a1f0b47531b28a0e8cbb932186d509&v=4"
            alt="Dhiego"
          />
          <div>
            <strong>repository/form</strong>
            <p>teste.....</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
