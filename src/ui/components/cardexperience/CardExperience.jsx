import "./style.css"
import React, { useState } from 'react';
import PopUpExperience from '../popupexperience/PopUpExperience.jsx';

const CardExperience = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [openPopUpXp, setOpenPopUpXp] = useState(null);

    const openPopUpExperience = (xp) => {
        setOpenPopUp(true);
        setOpenPopUpXp(xp);
    }

    const closePopUpExperience = () => {
        setOpenPopUp(false);
    }

    return (
        <div className="md:flex md:justify-evenly">
            <div className="cardExperienceAb mb-5 md:mb-0" title="Abase Sistemas e Soluções Ltda">
                <div className="text">
                    <span>Abase Sistemas</span>
                    <p className="subtitle">2023 - Atualmente</p>
                </div>
                <div className="flex justify-center py-1">
                    <img src="https://www.abase.com.br/wp-content/uploads/2023/04/logo2.png" alt="logotipo Abase" width={"80"} />
                </div>
                <div className="icons">
                    <a className="btn" href="https://www.abase.com.br/" target="_blank" rel="noreferrer">
                        <img className="svg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO1UzytEURR+yIJkJ+adM6TIwkZN4Z0zsWRlgdlKQsrPSRHeOXdlbcGkbJSlheQvsLKhxIKFwkZJSbGwpPukUKb3pnkb+Ta3bt/5vs4957uO849/REGS/GHszFY4cQJZ35DltM5baYjZROeB5S6RFo7NxLGnJz1I+oCk08XQLUmy3wokA8gy9WliAV1+M7BeAGkulRovj6z8Iaw5YL0H1nMk2UHSNSDNfuU1tZtqJD0A0sO69FJNKPFEylQCyQay3oInM+EKTSmyrgLLjUumLS+1sWOp1m6ONbFmTkQgyxaQXv9KqOk2VUhyBixzUcWdsJ0A6zaQrn+7zGTK7GySZPqQdRLSuuiSTBQ0E9czZNsMkpzJlIFnBoF0D1mfbR6Q9QhY95F1s+DtCgTJH8W06QWWK2A5BtZZl/yWn9yvOQk2j3Qsr3hA7lwGYHlEEg02ik2/zUZRE4/2rUle7dCTZNwQ/DcgPYF2g6EMgiLSXSB5CvvhIfsjkX9hZLlEkgUnTiDJS4JNfawmwP5QrAbOX8A7+YOczgVOfW8AAAAASUVORK5CYII=" alt="" />
                    </a>
                    <a className="btn" onClick={() => openPopUpExperience(0)} href="#">
                        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="svg-icon">
                            <path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="cardExperienceSol" title="Solution Sistemas e Gestão">
                <div className="text">
                    <span>Solution Sistemas</span>
                    <p className="subtitle">2022 - 2023</p>
                </div>
                <div className="flex justify-center py-1">
                    <img src="https://www.gestaosolution.com.br/wp-content/uploads/2023/11/LOGO-1-1-1.png" alt="logotipo Solution" width={"200"} />
                </div>
                <div className="icons">
                    <a className="btn" href="https://www.gestaosolution.com.br/sobre/" target="_blank" rel="noreferrer">
                        <img className="svg-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO1UzytEURR+yIJkJ+adM6TIwkZN4Z0zsWRlgdlKQsrPSRHeOXdlbcGkbJSlheQvsLKhxIKFwkZJSbGwpPukUKb3pnkb+Ta3bt/5vs4957uO849/REGS/GHszFY4cQJZ35DltM5baYjZROeB5S6RFo7NxLGnJz1I+oCk08XQLUmy3wokA8gy9WliAV1+M7BeAGkulRovj6z8Iaw5YL0H1nMk2UHSNSDNfuU1tZtqJD0A0sO69FJNKPFEylQCyQay3oInM+EKTSmyrgLLjUumLS+1sWOp1m6ONbFmTkQgyxaQXv9KqOk2VUhyBixzUcWdsJ0A6zaQrn+7zGTK7GySZPqQdRLSuuiSTBQ0E9czZNsMkpzJlIFnBoF0D1mfbR6Q9QhY95F1s+DtCgTJH8W06QWWK2A5BtZZl/yWn9yvOQk2j3Qsr3hA7lwGYHlEEg02ik2/zUZRE4/2rUle7dCTZNwQ/DcgPYF2g6EMgiLSXSB5CvvhIfsjkX9hZLlEkgUnTiDJS4JNfawmwP5QrAbOX8A7+YOczgVOfW8AAAAASUVORK5CYII=" alt="" />
                    </a>
                    <a className="btn" onClick={() => openPopUpExperience(1)} href="javascript:void(0)">
                        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="svg-icon">
                            <path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            {openPopUp && <PopUpExperience openPopUpXp={openPopUpXp} onClose={closePopUpExperience} />}
        </div>
    )
}

export default CardExperience;
