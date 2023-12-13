import './../../index.css';
import './style.css';
import { Link } from 'react-router-dom';
import CarouselHomeDev from '../../components/Carousel/Carousel';

const Home = () => {
  
    return (
      <div>
        <h1 className="title">Página em desenvolvimento</h1>
        <div className="containerCode">
          <CarouselHomeDev />
        </div>
        <div className="containerContact">
          <div className="contactItem">
            <img src="./github_logo.png" alt="GitHub Logo" className="logo" />
            <Link to='https://github.com/sammsts' target='_blank' className='githubLink'>
              <h2 className='logoText'>sammsts</h2>
            </Link>
          </div>
          <div className="contactItem">
            <img src="./gmail_logo.png" alt="Gmail Logo" className="logo" />
            <Link to='mailto:samuelmacielsts@gmail.com' target='_blank' className='gmailLink'>
              <h2 className='logoText'>samuelmacielsts@gmail.com</h2>
            </Link>
          </div>
          <div className="contactItem">
            <img src="./linkedin_logo.png" alt="LinkedIn Logo" className="logo" />
            <Link to='https://www.linkedin.com/in/samuelmacielsantos/' target='_blank' className='linkedinLink'>
              <h2 className='logoText'>Samuel Maciel dos Santos</h2>
            </Link>
          </div>
        </div>
      </div>
    );
  };
export default Home;