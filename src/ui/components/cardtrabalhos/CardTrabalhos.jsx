import "./style.css";

const CardTrabalhos = (data) => {
    return (
        <div className="flex">
            {
                data.repoGithub
                    .filter(repo => repo.id === 772333104 || repo.id === 685950022 || repo.id === 771863855 || repo.id === 772177700)
                    .map((repo, i) => (
                        <a href={`${repo.html_url}`} target="_blank">
                            <div className="main hover:shadow-2xl px-1 py-5 mx-3 my-3">
                                <div key={repo.id} className="relative cardTrabalhos">
                                    <div className="fl">
                                        <a href={`${repo.homepage}`} target="_blank" className="z-10" title="Deploy">
                                            <div className="fullscreen">
                                                <img src="https://img.icons8.com/ios/50/FFFFFF/forward-arrow.png" alt="forward-arrow"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="card_content">
                                        <img src={`${(() => {
                                            switch (i) {
                                                case 0:
                                                    return '/img/trabalhos/codereviewgif.gif';
                                                case 1:
                                                    return '/img/trabalhos/cpfgenerator.png';
                                                case 2:
                                                    return '/img/trabalhos/passwordgenerator.png';
                                                default:
                                                    return '/img/trabalhos/montaremoveis.png';
                                            }
                                        })()
                                            }`} alt={`${repo.full_name}`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                                    </div>
                                    <div className="card_back"></div>
                                    <div className="data">
                                        <div className="img z-10">
                                            <img src={`${data.userGithub.avatar_url}`} alt="avatar GitHub" />
                                        </div>
                                        <div className="text z-10">
                                            <div className="text_m">{repo.name}</div>
                                            <div className="text_s">{data.userGithub.name} (sammsts)</div>
                                        </div>
                                    </div>
                                    <div className="btns">
                                        <div className="comments">
                                            <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/star--v1.png" alt="star--v1" href="https://icons8.com/icon/60003/estrela" />
                                            <span className="comments_text">{repo.stargazers_count}</span>
                                        </div>
                                        <div className="views">
                                            <svg title="Views" viewBox="0 0 30.5 16.5" className="views_svg">
                                                <path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path>
                                            </svg>
                                            <span className="views_text">{repo.watchers}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                    )
            }
        </div>
    );
};

export default CardTrabalhos;