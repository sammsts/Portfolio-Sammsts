import './style.css';
import React from 'react';

const CardSocial = () => {
  return (
    <div className="card">
      <span><p>@</p></span>
      <a className="social-link" href="https://github.com/sammsts" target="_blank" rel="noreferrer" title="GitHub">
        <i className="devicon-github-original colored"></i>
      </a>
      <a className="social-link" href="https://www.linkedin.com/in/samuelmacielsantos/" target="_blank" rel="noreferrer" title="LinkedIn">
        <svg viewBox="0 0 128 128">
            <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
        </svg>
      </a>
      <a className="social-link" href="mailto:samuelmacielsts@gmail.com" title="Gmail">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default CardSocial;
