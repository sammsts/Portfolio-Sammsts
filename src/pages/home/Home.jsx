import './style.css';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-primary text-white w-screen h-screen">
      <div className="flex justify-between w-full px-60">
        <div>
          <div className="w-max">
            <h1 className="font-abhaya-libre text-5xl tracking-normal pb-5">
              <ReactTyped 
                strings={[
                  "Samuel Maciel dos Santos"
                ]}
                typeSpeed={150}
                backSpeed={50}
                loop
              />
            </h1>
          </div>
          <div className="w-80">
            <h3 className="font-abhaya-libre text-2xl tracking-normal pb-5">
              Desenvolvedor Full Stack Jr
            </h3>
            <p className="text-xs text-slate-400 tracking-normal">
              Eu projeto interações digitais detalhadas, cativantes e de fácil acesso para todos os usuários.
            </p>
          </div>
          <div className="font-abhaya-libre text-slate-400 text-2xl pt-24">
            <div>Sobre</div>
            <div>Experiências</div>
            <div>Trabalhos</div>
            <div>Contato</div>
          </div>
        </div>
        <div className="w-2/6 font-abhaya-libre text-xl text-justify">
          <div>
            <p className="text-slate-400 indent-8">
              19 anos de idade, natural de <span className="text-white">Santo Ângelo - RS</span>. Sou um profissional dedicado ao máximo, trabalhando e conciliando meus estudos na <span className="text-white">universidade</span>. No decorrer de minha carreira profissional pude experienciar algumas <span className="text-white">linguagens de programação</span>, <span className="text-white">frameworks</span>, <span className="text-white">bancos de dados</span>, <span className="text-white">linguagens de marcação</span> e de <span className="text-white">estilo</span> do mercado atual.
            </p>
          </div>
          <div className="py-5">
            <p className="text-slate-400 indent-8">
              Busco ampliar meus conhecimentos a todo momento, e adquirir experiências inovadoras.
            </p>
          </div>
          <div>
            <p className="text-slate-400 indent-8">
              <span className="text-white">Experiência</span> com sistemas de gestão, ERP; Experiência com diversos softwares, desde voltados a área de desenvolvimento, a edição e até construtores de ambientes residenciais. Como <span className="text-white">desenvolvedor de software</span> pude expandir em enorme escala minha lógica computacional para sistemas. Atualmente como <span className="text-white">desenvolvedor Full Stack</span> estou podendo conhecer novas tecnologias e contribuir para este escopo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;