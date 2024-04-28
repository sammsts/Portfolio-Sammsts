import './style.css';

const CardExperience = () => {
    return (
        <div className="md:flex md:justify-between mx-auto md:px-5">
            <div className="cardExperience">
                <span className="font-abhaya-libre text-xl grid justify-items-center">
                    <p className="py-5 text-sm text-slate-400 tracking-normal italic">2023 - Atualmente</p>
                    <img src="https://www.abase.com.br/wp-content/uploads/2023/04/logo2.png" width={'128'} alt="Logotipo Abase"/>
                </span>
                <div className="card__content">
                    <p className="card__title">Card Title
                    </p><p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <div className="cardExperience">
                <span className="font-abhaya-libre text-xl grid justify-items-center">
                    <p className="text-sm text-slate-400 tracking-normal italic">2022 - 2023</p>
                    <img src="https://www.gestaosolution.com.br/wp-content/uploads/2023/11/logosolution-768x274-1.webp" width={'228'} alt="Logotipo Solution"/>
                </span>
                <div className="card__content">
                    <p className="card__title">Card Title
                    </p><p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
        </div>
        
    );
};

export default CardExperience;