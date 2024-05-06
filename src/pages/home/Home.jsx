import './style.css';
import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { isMobile } from 'react-device-detect';
import CardSocial from '../../ui/components/cardsocial/CardSocial.jsx';
import CardTrabalhos from '../../ui/components/cardtrabalhos/CardTrabalhos.jsx';
import Contact from '../../ui/components/contact/Contact.jsx';
import ScrollReveal from 'scrollreveal';
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
    setTimeout(() => {
      ScrollReveal().reveal('.se-1', {
        origin: 'top',
        distance: '10px',
        duration: 1000,
        delay: 220,
        easing: 'ease-in-out',
        reset: true,
      });

      ScrollReveal().reveal('.se-2', {
        origin: 'top',
        distance: '10px',
        duration: 1000,
        delay: 220,
        easing: 'ease-in-out',
        reset: true,
      });
    }, 300);
    
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
      <div className="container md:flex mx-auto py-16 px-4 pt-24">
        <div className="se-1 md:absolute md:grid md:grid-cols-1 flex flex-col items-center md:text-left text-center">
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
          <div className={`se-2 shadow-2xl overflow-y-scroll no-scrollbar md:pr-8 text-justify`} style={!isMobile ? { width: '40%', height: '700px', padding: '5%' } : { width: '100%', height: '700px', padding: '5%' }}>
            <div id="sobre">
              <p className="text-slate-400 indent-8 mb-4">
                19 anos de idade, natural de <span className="text-white">Santo Ângelo - RS</span>. Sou um profissional dedicado ao máximo, trabalhando e conciliando meus estudos na <span className="text-white">universidade</span>. No decorrer de minha carreira profissional pude experienciar algumas <span className="text-white">linguagens de programação</span>, <span className="text-white">frameworks</span>, <span className="text-white">bancos de dados</span>, <span className="text-white">linguagens de marcação</span> e de <span className="text-white">estilo</span> do mercado atual.
              </p>
              <p className="text-slate-400 indent-8 mb-4">
                Busco ampliar meus conhecimentos a todo momento, e adquirir experiências inovadoras.
              </p>
              <p className="text-slate-400 indent-8">
                <span className="text-white">Experiência</span> com sistemas de gestão, ERP; Experiência com diversos softwares, desde voltados a área de desenvolvimento, a edição e até construtores de ambientes residenciais. Como <span className="text-white">desenvolvedor de software</span> pude expandir em enorme escala minha lógica computacional para sistemas. Atualmente como <span className="text-white">desenvolvedor Full Stack</span> estou podendo conhecer novas tecnologias e contribuir para este escopo.
              </p>
              <div className="mt-5">
                <ul className="list-inside text-slate-400">
                  <li className="font-extrabold">Formações:</li>
                  <ul className="list-disc ml-7 text-left">
                    <li className="hover:underline decoration-blue-400">Acadêmico de Ciência da Computação (em andamento);</li>
                    <li>Técnico em Eletrotécnica;</li>
                    <li>Ensino Médio completo;</li>
                    <li>Inglês básico 1 e 2;</li>
                    <li>Cursos extracurriculares (udemy).</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div id="experiencias" className="shadow-xl">
              <div className="transition duration-500 ease-in-out rounded-lg hover:cursor-pointer hover:shadow-2xl hover:drop-shadow-2xl hover:bg-gray-800 hover:border-gray-800 mt-20 p-1">
                <div className="flex flex-col items-center mb-4 mt-5"><img src="https://www.abase.com.br/wp-content/uploads/2023/04/logo2.png" alt="logotipo Abase" width={"80"} /></div>
                <p className="italic text-slate-200 mb-5 text-center">Desenvolvedor Full Stack Jr 05/2023 - Atualmente</p>
                <ul className="list-inside text-slate-400">
                  <li className="flex">Líder de um time de desenvolvimento, unidade em Santo Ângelo - RS;</li>
                  <li>
                    <p className="text-left">Tecnologias utilizadas:</p>
                    <ul className="list-disc ml-7 text-left">
                      <li>C# | .NET Framework/ASP.NET Core, NHibernate, Entity Framework, estrutura de projeto service/repository, cshtml;</li>
                      <li>JavaScript | Sencha Ext.Js, JQuery;</li>
                      <li>Banco de dados | PostgreSQL, Sybase Central - SQL Anywhere 12.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr className="w-auto mt-10 mb-10" />
              <div className="transition duration-500 ease-in-out rounded-lg hover:cursor-pointer hover:shadow-2xl hover:drop-shadow-2xl hover:bg-gray-800 hover:border-gray-800 p-1">
                <div className="flex flex-col items-center mb-4"><img src="https://www.gestaosolution.com.br/wp-content/uploads/2023/11/LOGO-1-1-1.png" alt="logotipo Solution" width={"200"} /></div>
                <p className="italic text-slate-200 mb-5 text-center">Desenvolvedor de Software Jr. 01/2023 - 05/2023</p>
                <ul className="list-inside text-slate-400">
                  <li className="flex">Desenvolvimento de melhorias e manutenções do sistema ERP Solution;</li>
                  <li>
                    <p className="text-left">Tecnologias utilizadas:</p>
                    <ul className="list-disc ml-7 text-left">
                      <li>Genexus, PostgreSQL.</li>
                    </ul>
                  </li>
                </ul>
                <hr className="w-auto mt-5 mb-5 border-neutral-800" />
                <p className="italic text-slate-200 mb-5 text-center">Auxiliar de implantação 03/2022 - 12/2022</p>
                <ul className="list-inside text-slate-400">
                  <li className="flex">Implantação do sistema (ERP Solution) nos clientes;</li>
                  <li>
                    <p className="text-left">Tecnologias utilizadas:</p>
                    <ul className="list-disc ml-7 text-left">
                      <li>PostgreSQL.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="w-auto mt-10 mb-10" />
            <div id="trabalhos" className="shadow-xl h-82 md:h-80 overflow-x-scroll">
              <CardTrabalhos userGithub={userGithub} repoGithub={repoGithub} />
            </div>
            <div className="py-3">
              <a href="https://github.com/sammsts?tab=repositories" target="_blank" rel="noreferrer">
                <p className="flex flex-col items-center hover:cursor-pointer font-thin italic underline decoration-slate-300 hover:decoration-green-500 hover:text-green-400">Veja mais...</p>
              </a>
            </div>
            <div id="contato">
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full text-white py-4 px-6">
        <CardSocial />
      </div>
    </div>
  );
};

export default Home;