import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'; // Parâmetros da minha rota.
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import LogoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  console.log(params);

  return (
    <>
      <Header>
        <img src={LogoImage} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/32173704?s=460&u=35e5173ecdb3b997bf14e21b0923beacd972bae1&v=4"
            alt="Matheus Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="hdsdhsdsud">
          <div>
            <strong>sdssddsd</strong>
            <p>sdsdsdsdsd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
