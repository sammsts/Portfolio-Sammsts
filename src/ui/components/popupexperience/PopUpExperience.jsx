import React from 'react';
import './style.css';

const PopUpExperience = ({ openPopUpXp, onClose }) => {
    const closePopUp = () => {
        onClose();
    }

    if (openPopUpXp == 0) {
        return (
            <div className={`modal-background`}>
                <div className={`modalAb`}>
                    <div className="cardPopUpAb">
                        <img src="https://www.abase.com.br/wp-content/uploads/2023/04/logo2.png" width={"80"} />
                        <p className="cookieHeading">Desenvolvedor Full Stack Jr.</p>
                        <ul className="list-inside">
                            <li className="flex cookieDescription">Líder de um time de desenvolvimento, unidade em Santo Ângelo - RS;</li>
                            <li className="cookieDescription">
                                <p className="text-left">Tecnologias utilizadas:</p>
                                <ul className="list-disc ml-7 text-left">
                                    <li>C# | .NET Framework/ASP.NET Core, NHibernate, Entity Framework, estrutura de projeto service/repository, cshtml;</li>
                                    <li>JavaScript | Sencha Ext.Js, JQuery;</li>
                                    <li>Banco de dados | PostgreSQL, Sybase Central - SQL Anywhere 12;</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="buttonContainer pt-5 md:pt-32">
                            <button className="declineButtonAb" onClick={closePopUp}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`modal-background`}>
                <div className={`modalSol`}>
                    <div className="cardPopUpSol">
                        <img src="https://www.gestaosolution.com.br/wp-content/uploads/2023/11/logosolution-768x274-1.webp" width={"200"} />
                        <p className="cookieHeading">Auxiliar de implantação 03/2022 - 12/2022</p>
                        <ul className="list-inside">
                            <li className="flex cookieDescription">Implantação do sistema (ERP Solution) nos clientes;</li>
                            <li className="cookieDescription">
                                <p className="text-left">Tecnologias utilizadas:</p>
                                <ul className="list-disc ml-7 text-left">
                                    <li>PostgreSQL.</li>
                                </ul>
                            </li>
                        </ul>
                        <hr color="#08b1ff" className="w-auto" />
                        <p className="cookieHeading">Desenvolvedor de Software Jr. 01/2023 - 05/2023</p>
                        <ul className="list-inside">
                            <li className="flex cookieDescription">Desenvolvimento de melhorias e manutenções do sistema ERP Solution;</li>
                            <li className="cookieDescription">
                                <p className="text-left">Tecnologias utilizadas:</p>
                                <ul className="list-disc ml-7 text-left">
                                    <li>Genexus, PostgreSQL.</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="buttonContainer pt-14">
                            <button className="declineButtonSol" onClick={closePopUp}>Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default PopUpExperience;
