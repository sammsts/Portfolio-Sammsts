import "./style.css";

const CardTrabalhos = (data) => {
    console.log(data.repoGithub)
    return (
        <div className="grid grid-cols-4 px-5 py-5">
            {data.repoGithub.map((repo, i) => (
                <div className="main mx-3 my-3">
                    <div key={repo.id} className="relative cardTrabalhos">
                        <div className="fl">
                            <div className="fullscreen">
                                <svg className="fullscreen_svg" viewBox="0 0 100 100">
                                    <path d="M3.563-.004a3.573 3.573 0 0 0-3.527 4.09l-.004-.02v28.141c0 1.973 1.602 3.57 3.57 3.57s3.57-1.598 3.57-3.57V12.218v.004l22.461 22.461a3.571 3.571 0 0 0 6.093-2.527c0-.988-.398-1.879-1.047-2.523L12.218 7.172h19.989c1.973 0 3.57-1.602 3.57-3.57s-1.598-3.57-3.57-3.57H4.035a3.008 3.008 0 0 0-.473-.035zM96.333 0l-.398.035.02-.004h-28.16a3.569 3.569 0 0 0-3.57 3.57 3.569 3.569 0 0 0 3.57 3.57h19.989L65.323 29.632a3.555 3.555 0 0 0-1.047 2.523 3.571 3.571 0 0 0 6.093 2.527L92.83 12.221v19.985a3.569 3.569 0 0 0 3.57 3.57 3.569 3.569 0 0 0 3.57-3.57V4.034v.004a3.569 3.569 0 0 0-3.539-4.043l-.105.004zM3.548 64.23A3.573 3.573 0 0 0 .029 67.8v28.626-.004l.016.305-.004-.016.004.059v-.012l.039.289-.004-.023.023.121-.004-.023c.074.348.191.656.34.938l-.008-.02.055.098-.008-.02.148.242-.008-.012.055.082-.008-.012c.199.285.43.531.688.742l.008.008.031.027.004.004c.582.461 1.32.742 2.121.762h.004l.078.004h28.61a3.569 3.569 0 0 0 3.57-3.57 3.569 3.569 0 0 0-3.57-3.57H12.224l22.461-22.461a3.569 3.569 0 0 0-2.492-6.125l-.105.004h.008a3.562 3.562 0 0 0-2.453 1.074L7.182 87.778V67.793a3.571 3.571 0 0 0-3.57-3.57h-.055.004zm92.805 0a3.573 3.573 0 0 0-3.519 3.57v19.993-.004L70.373 65.328a3.553 3.553 0 0 0-2.559-1.082h-.004a3.573 3.573 0 0 0-3.566 3.57c0 1.004.414 1.91 1.082 2.555l22.461 22.461H67.802a3.57 3.57 0 1 0 0 7.14h28.606c.375 0 .742-.059 1.082-.168l-.023.008.027-.012-.02.008.352-.129-.023.008.039-.02-.02.008.32-.156-.02.008.023-.016-.008.008c.184-.102.34-.207.488-.32l-.008.008.137-.113-.008.004.223-.211.008-.008c.156-.164.301-.34.422-.535l.008-.016-.008.016.008-.02.164-.285.008-.02-.008.016.008-.02c.098-.188.184-.406.246-.633l.008-.023-.004.008.008-.023a3.44 3.44 0 0 0 .121-.852v-.004l.004-.078V67.804a3.569 3.569 0 0 0-3.57-3.57h-.055.004z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="card_content">
                            <img src={`${(() => {
                                    switch (i) {
                                        case 0:
                                            return '/img/trabalhos/Algorithm-Validates-CPF.jpg';
                                        case 1:
                                            return '/caminho/para/imagem-2.png';
                                        case 2:
                                            return '/caminho/para/imagem-3.png';
                                        default:
                                            return '/caminho/para/imagem-padrao.png';
                                    }
                                })()
                                }`} alt={`${repo.full_name}`} className="absolute inset-0 w-full object-cover opacity-25"/>
                        </div>
                        <div className="card_back"></div>
                        <div className="data">
                            <div className="img">
                                <img src={`${data.userGithub.avatar_url}`} alt="avatar GitHub" />
                            </div>
                            <div className="text">
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
            ))}
        </div>
    );
};

export default CardTrabalhos;