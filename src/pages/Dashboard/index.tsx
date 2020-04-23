import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38896055?s=460&u=2cdac1959ecdf4442478f35341fd5ceb0e213160&v=4"
            alt="Brenda Matias"
          />
          <div>
            <strong>brendamatias/github_explorer</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38896055?s=460&u=2cdac1959ecdf4442478f35341fd5ceb0e213160&v=4"
            alt="Brenda Matias"
          />
          <div>
            <strong>brendamatias/github_explorer</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38896055?s=460&u=2cdac1959ecdf4442478f35341fd5ceb0e213160&v=4"
            alt="Brenda Matias"
          />
          <div>
            <strong>brendamatias/github_explorer</strong>
            <p>Lorem ipsum lorem ipsum</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
