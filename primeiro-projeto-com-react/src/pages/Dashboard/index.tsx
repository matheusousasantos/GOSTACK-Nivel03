import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32173704?s=40&v=4"
            alt="Matheus Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Esy repositórios no Github & react BackgroundGithub</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32173704?s=40&v=4"
            alt="Matheus Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Esy repositórios no Github & react BackgroundGithub</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/32173704?s=40&v=4"
            alt="Matheus Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Esy repositórios no Github & react BackgroundGithub</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
