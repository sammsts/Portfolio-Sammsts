import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Skills from './img/skills-carousel.png';
import SkillsMobile from './img/skills-carousel-mobile.png';
import WorkstationTools from './img/workstation-tools-carousel.png';
import WorkstationToolsMobile from './img/workstation-tools-carousel-mobile.png';
import Databases from './img/databases-carousel.png';
import DatabasesMobile from './img/databases-carousel-mobile.png';
import React, { useEffect, useState } from 'react';

function CarouselHomeDev() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 600);
        };

        handleResize();

    return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <Carousel className="custom-carousel" data-bs-theme="dark">
      <Carousel.Item>
        {isMobile ? (
            <img src={SkillsMobile} alt='Skills' />
        ) : (
            <img src={Skills} alt='Skills' />
        )}
        <Carousel.Caption>
          <h3>Skills: </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {isMobile ? (
            <img src={WorkstationToolsMobile} alt='Workstation Tools' />
        ) : (
            <img src={WorkstationTools} alt='Workstation Tools' />
        )}
        <Carousel.Caption>
          <h3>Workstation Tools: </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {isMobile ? (
            <img src={DatabasesMobile} alt='Databases' />
        ) : (
            <img src={Databases} alt='Databases' />
        )}
        <Carousel.Caption>
          <h3>Databases: </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHomeDev;