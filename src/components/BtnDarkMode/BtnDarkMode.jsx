import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BtnDarkMode({ onClick }) {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: <BiSun />, value: '1' },
        { name: <BiMoon />, value: '2' }
      ];

      const handleRadioChange = (value) => {
        setRadioValue(value);
    
        if (onClick) {
          onClick(value === '2');
        }
      };

    return (
    <ButtonGroup size='sm' className='rdDarkMode'>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-dark' : 'outline-light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handleRadioChange(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }

export default BtnDarkMode;