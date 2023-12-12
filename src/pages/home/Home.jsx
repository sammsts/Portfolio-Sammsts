import { Link } from 'react-router-dom';
import './style.css';

const Home = ({ isDarkMode }) => {
    const pageStyle = {
        backgroundColor: isDarkMode ? '#1C1C1C' : '#E6E6FA',
        color: isDarkMode ? '#FFFFFF' : '#000000',
        transition: 'background-color 0.3s ease',
    };
  
    return (
      <div style={pageStyle}>
        <Link to='https://github.com/sammsts' target='_blank' className='githubLink'>
          <h2 className='githubText'>sammsts</h2>
        </Link>
        <Link to='mailto:samuelmacielsts@gmail.com' target='_blank' className='gmailLink'>
          <h2 className='gmailText'>samuelmacielsts@gmail.com</h2>
        </Link>
        <Link to='https://www.linkedin.com/in/samuelmacielsantos/' target='_blank' className='linkedinLink'>
          <h2 className='linkedinText'>Samuel Maciel dos Santos</h2>
        </Link>
      </div>
    );
  };
export default Home;