import './style.css';
import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { isMobile } from 'react-device-detect';
import CardSocial from '../../ui/components/cardsocial/CardSocial.jsx';
import CardExperience from '../../ui/components/cardexperience/CardExperience.jsx';
import CardTrabalhos from '../../ui/components/cardtrabalhos/CardTrabalhos.jsx';
import axios from 'axios';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState('Sobre');
  const [userGithub, setUserGithub] = useState([]);
  const [repoGithub, setRepoGithub] = useState([]);

  const handleItemClick = (item, id) => {
    setSelectedItem(item);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Experiências', id: 'experiencias' },
    { label: 'Trabalhos', id: 'trabalhos' },
    { label: 'Contato', id: 'contato' },
  ];

  useEffect(() => {
    const user = process.env.REACT_APP_USER_GITHUB;
    const headers = {
      Authorization: `token ${process.env.REACT_APP_TOKEN_GITHUB}`,
    };

    const fetchDataUser = async () => {
      try {
        const userData = await axios.get(`https://api.github.com/users/${user}`, { headers });
        return userData.data;
      } catch (error) {
        console.error(`Erro ao buscar dados do usuário do GitHub.`);
        return null;
      }
    };

    const fetchRepoData = async () => {
      try {
        const repoData = await axios.get(`https://api.github.com/users/${user}/repos`, { headers });
        return repoData.data;
      } catch (error) {
        console.error(`Erro ao buscar dados dos repositórios do GitHub.`);
        return [];
      }
    };

    const fetchData = async () => {
      try {
        const userData = await fetchDataUser();
        const repoData = await fetchRepoData();
        setUserGithub(userData);
        setRepoGithub(repoData);
      } catch (error) {
        console.error(`Erro ao buscar dados do GitHub.`);
      }
    };

    fetchData();
  }, []);


  if (!userGithub) {
    return console.log('Carregando dados do GitHub...');
  }

  return (
    <div className="bg-primary text-white min-h-screen">
      <div id="sobre" className="container md:flex mx-auto py-16 px-4 pt-20 md:pt-40">
        <div className="md:absolute md:grid md:grid-cols-1 flex flex-col items-center md:text-left text-center mb-10">
          <h1 className="font-abhaya-libre text-3xl md:text-6xl font-extrabold mb-2">
            <ReactTyped
              strings={[
                "Samuel Maciel dos Santos"
              ]}
              typeSpeed={150}
              backSpeed={50}
              loop
            />
          </h1>
          <h3 className="font-abhaya-libre text-xl md:text-2xl pb-4">
            Desenvolvedor Full Stack Jr
          </h3>
          <p className="text-sm text-slate-400 tracking-normal pb-4">
            Eu projeto interações digitais detalhadas, cativantes e de fácil acesso para todos os usuários.
          </p>
          <div className="w-full md:w-1/3 pt-16">
            <div className="flex justify-between md:grid font-abhaya-libre text-xl text-center md:text-left">
              {items.map((item) => (
                <div
                  key={item.label}
                  className={`cursor-pointer mb-4 ${selectedItem === item.label
                    ? `text-white ${isMobile ? 'border-b-4' : 'md:border-l-4'} border-white md:pl-4`
                    : 'hover:text-white hover:border-l-4 hover:border-white hover:pl-4'
                    }`}
                  onClick={() => handleItemClick(item.label, item.id)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between md:flex-row-reverse">
          <div className="mb-8 md:mb-0 md:w-2/6 md:pr-8 text-justify">
            <p className="text-slate-400 indent-8 mb-4">
              19 anos de idade, natural de <span className="text-white">Santo Ângelo - RS</span>. Sou um profissional dedicado ao máximo, trabalhando e conciliando meus estudos na <span className="text-white">universidade</span>. No decorrer de minha carreira profissional pude experienciar algumas <span className="text-white">linguagens de programação</span>, <span className="text-white">frameworks</span>, <span className="text-white">bancos de dados</span>, <span className="text-white">linguagens de marcação</span> e de <span className="text-white">estilo</span> do mercado atual.
            </p>
            <p className="text-slate-400 indent-8 mb-4">
              Busco ampliar meus conhecimentos a todo momento, e adquirir experiências inovadoras.
            </p>
            <p className="text-slate-400 indent-8">
              <span className="text-white">Experiência</span> com sistemas de gestão, ERP; Experiência com diversos softwares, desde voltados a área de desenvolvimento, a edição e até construtores de ambientes residenciais. Como <span className="text-white">desenvolvedor de software</span> pude expandir em enorme escala minha lógica computacional para sistemas. Atualmente como <span className="text-white">desenvolvedor Full Stack</span> estou podendo conhecer novas tecnologias e contribuir para este escopo.
            </p>
          </div>
        </div>
      </div>
      <div id="experiencias" className="container shadow-2xl mx-auto md:h-80 py-16 px-16 md:mt-40">
        <div>
          <CardExperience />
        </div>
      </div>
      <div id="trabalhos" className="container overflow-y-scroll md:h-96 mx-auto py-16 px-16 md:mt-40">
        <div>
          <CardTrabalhos userGithub={userGithub} repoGithub={repoGithub} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full text-white py-4 px-6">
        <CardSocial />
      </div>
    </div>
  );
};

export default Home;